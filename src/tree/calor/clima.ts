import { DecisionNode } from "../../types/tree";

export const climaCalor: Record<string, DecisionNode> = {
    clima_calor: {
        id: "clima_calor",
        question: "Como está o clima?",
        options: [
            { label: "1. Sol forte", nextNodeId: "ocasião_calor" },
            { label: "2. Chuva", nextNodeId: "chuva_calor" },
            { label: "3. Ventando", nextNodeId: "vento_calor" },
            { label: "4. Nublado", nextNodeId: "ocasião_calor" },
        ],
    },

    chuva_calor: {
        id: "chuva_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um vestido leve com sandália e levar guarda-chuva"
                : "camiseta, bermuda e chinelo com guarda-chuva"
            }.`,
    },

    vento_calor: {
        id: "vento_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um short com blusa ajustada e tênis"
                : "camiseta com bermuda e tênis"
            }.`,
    },
};