import { DecisionNode } from "../../types/tree";

export const ocasiaoFrio: Record<string, DecisionNode> = {
    ocasião_frio: {
        id: "ocasião_frio",
        question: "Qual a ocasião?",
        options: [
            { label: "1. Trabalho", nextNodeId: "trabalho_frio" },
            { label: "2. Evento", nextNodeId: "evento_frio" },
            { label: "3. Casa", nextNodeId: "casa_frio" },
        ],
    },

    trabalho_frio: {
        id: "trabalho_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "blusa, calça e casaco"
                : "camisa, calça e casaco"
            }.`,
    },

    evento_frio: {
        id: "evento_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "vestido com sobretudo e bota"
                : "terno com sobretudo"
            }.`,
    },

    casa_frio: {
        id: "casa_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "moletom com legging"
                : "moletom com calça"
            }.`,
    },
};