import readline from "readline";
import { tree } from "./data/knowledge";
import { UserProfile, DecisionNode } from "./types/tree";

// ================= UTIL =================
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function digitar(texto: string) {
    for (const char of texto) {
        process.stdout.write(char);
        await delay(15);
    }
    console.log();
}

async function pensando() {
    process.stdout.write("\n🤖 Pensando");
    for (let i = 0; i < 3; i++) {
        await delay(300);
        process.stdout.write(".");
    }
    console.log("\n");
}

// ================= READLINE =================
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntar(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto + "\n> ", resolve);
    });
}

// ================= VALIDAÇÃO =================
async function perguntarOpcaoValida(
    texto: string,
    totalOpcoes: number
): Promise<number> {
    while (true) {
        const resposta = await perguntar(texto);

        if (resposta.toLowerCase() === "x") {
            console.log("\n👋 Encerrando...");
            process.exit();
        }

        const index = parseInt(resposta) - 1;

        if (!isNaN(index) && index >= 0 && index < totalOpcoes) {
            return index;
        }

        console.log("❌ Entrada inválida! Digite uma opção válida.\n");
    }
}

// ================= APP =================
async function iniciar() {
    console.clear();
    await digitar("👕 ASSISTENTE DE ROUPA INTELIGENTE\n");

    // ===== GÊNERO =====
    const generoIndex = await perguntarOpcaoValida(
        "Qual seu gênero?\n1. Feminino\n2. Masculino\n(X para sair)",
        2
    );

    const genero = generoIndex === 0 ? "feminino" : "masculino";

    // ===== ESTILO =====
    const estiloIndex = await perguntarOpcaoValida(
        "\nQual seu estilo?\n1. Casual\n2. Moderno\n3. Elegante",
        3
    );

    const estilo =
        estiloIndex === 1 ? "moderno" :
            estiloIndex === 2 ? "elegante" :
                "casual";

    // ===== PRIORIDADE =====
    const prioridadeIndex = await perguntarOpcaoValida(
        "\nO que você prioriza?\n1. Conforto\n2. Estética",
        2
    );

    const prioridade =
        prioridadeIndex === 1 ? "estetica" : "conforto";

    const profile: UserProfile = {
        genero,
        estilo,
        prioridade,
    };

    let currentNode: DecisionNode = tree["start"];
    const caminho: { pergunta: string; resposta: string }[] = [];
    const historico: DecisionNode[] = [];

    while (true) {
        if (currentNode.result) {
            await pensando();
            const resposta = currentNode.result(profile);

            await digitar("\n" + resposta);

            console.log("\n📍 Caminho da decisão:");
            caminho.forEach((c, i) => {
                console.log(`${i + 1}. ${c.pergunta}: ${c.resposta}`);
            });

            break;
        }

        // ===== MONTA PERGUNTA =====
        let texto = "\n" + currentNode.question + "\n";

        currentNode.options?.forEach((opt) => {
            texto += opt.label + "\n";
        });

        texto += "\n0. Voltar | X para sair";

        // ===== VALIDA RESPOSTA =====
        while (true) {
            const resposta = await perguntar(texto);

            if (resposta.toLowerCase() === "x") {
                console.log("\n👋 Encerrando...");
                process.exit();
            }

            if (resposta === "0") {
                if (historico.length > 0) {
                    currentNode = historico.pop()!;
                    caminho.pop();
                } else {
                    console.log("⚠️ Você já está no início.");
                }
                break;
            }

            const index = parseInt(resposta) - 1;

            if (
                !isNaN(index) &&
                currentNode.options &&
                index >= 0 &&
                index < currentNode.options.length
            ) {
                const escolha = currentNode.options[index];
                const respostaLimpa = escolha.label.replace(/^\d+\.\s*/, "");

                caminho.push({
                    pergunta: currentNode.question || "",
                    resposta: respostaLimpa,
                });

                historico.push(currentNode);
                currentNode = tree[escolha.nextNodeId];
                break;
            }

            console.log("❌ Entrada inválida! Tente novamente.\n");
        }
    }

    rl.close();
}

iniciar();