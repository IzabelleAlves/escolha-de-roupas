import { DecisionNode } from "../../types/tree";

export const lazerCalor: Record<string, DecisionNode> = {
    ocasião_calor: {
        id: "ocasião_calor",
        question: "Qual a ocasião?",
        options: [
            { label: "1. Trabalho", nextNodeId: "ambiente_trabalho_calor" },
            { label: "2. Evento", nextNodeId: "tipo_evento_calor" },
            { label: "3. Lazer", nextNodeId: "lazer_calor" },
            { label: "4. Academia", nextNodeId: "academia_calor" },
        ],
    },

    lazer_calor: {
        id: "lazer_calor",
        question: "Onde será o lazer?",
        options: [
            { label: "1. Praia", nextNodeId: "praia_calor" },
            { label: "2. Shopping", nextNodeId: "shopping_calor" },
            { label: "3. Parque", nextNodeId: "parque_calor" },
        ],
    },

    praia_calor: {
        id: "praia_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "biquíni com saída de praia"
                : "bermuda de praia e regata"
            }.`,
    },

    shopping_calor: {
        id: "shopping_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "vestido leve com tênis"
                : "camiseta com bermuda e tênis"
            }.`,
    },

    parque_calor: {
        id: "parque_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "short com camiseta e tênis"
                : "regata com bermuda e tênis"
            }.`,
    },

    academia_calor: {
        id: "academia_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "top com legging e tênis"
                : "regata com short e tênis"
            }.`,
    },
};