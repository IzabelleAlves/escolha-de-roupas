import readline from "readline";
import { tree } from "./data/knowledge";
import { UserProfile, DecisionNode } from "./types/tree";

// ===== UTIL =====
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function pensando() {
    process.stdout.write("\n🤖 Pensando");

    for (let i = 0; i < 3; i++) {
        await delay(500);
        process.stdout.write(".");
    }

    console.log("\n");
}

async function digitar(texto: string) {
    for (const char of texto) {
        process.stdout.write(char);
        await delay(20);
    }
    console.log();
}

// ===== READLINE =====
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function perguntar(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto + "\n> ", resolve);
    });
}

// ===== APP =====
async function iniciar() {
    console.log("👕 Assistente de Roupa Inteligente\n");

    // ===== PERFIL =====
    const estiloInput = await perguntar(
        "Qual seu estilo?\n1. Casual\n2. Moderno\n3. Elegante"
    );

    const prioridadeInput = await perguntar(
        "\nO que você prioriza?\n1. Conforto\n2. Estética"
    );

    const profile: UserProfile = {
        estilo:
            estiloInput === "2"
                ? "moderno"
                : estiloInput === "3"
                    ? "elegante"
                    : "casual",
        prioridade: prioridadeInput === "2" ? "estetica" : "conforto",
    };

    let currentNode: DecisionNode = tree["start"];
    // const caminho: string[] = [];
    const caminho: { pergunta: string; resposta: string }[] = [];

    while (true) {
        if (currentNode.result) {
            await pensando();
            await digitar("✨ Analisando suas respostas...");
            await delay(500);

            const respostaFinal = currentNode.result(profile);

            await digitar("\n" + respostaFinal);

            // 🔥 MOSTRA CAMINHO (diferencial)
            // console.log("\n📍 Caminho da decisão:");
            // caminho.forEach((c, i) => {
            //     console.log(`${i + 1}. ${c}`);
            // });
            console.log("\n📍 Caminho da decisão:");

            caminho.forEach((item, i) => {
                console.log(
                    `${i + 1}. ${item.pergunta.replace("?", "")}: ${item.resposta}`
                );
            });

            break;
        }

        let texto = "\n" + currentNode.question + "\n";

        currentNode.options?.forEach((opt) => {
            texto += opt.label + "\n";
        });

        await pensando();

        const resposta = await perguntar(texto);
        const index = parseInt(resposta) - 1;

        if (!currentNode.options || !currentNode.options[index]) {
            console.log("❌ Opção inválida. Tente novamente.");
            continue;
        }

        // const escolha = currentNode.options[index];
        // caminho.push(escolha.label);
        const escolha = currentNode.options[index];

        // remove "1. " da frente
        const respostaLimpa = escolha.label.replace(/^\d+\.\s*/, "");

        caminho.push({
            pergunta: currentNode.question || "",
            resposta: respostaLimpa,
        });

        currentNode = tree[escolha.nextNodeId];
    }

    rl.close();
}

iniciar();