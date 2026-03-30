import { DecisionNode } from "../../types/tree";

export const climaFrio: Record<string, DecisionNode> = {
    clima_frio: {
        id: "clima_frio",
        question: "Como está o clima?",
        options: [
            { label: "1. Seco", nextNodeId: "ocasião_frio" },
            { label: "2. Chuva", nextNodeId: "chuva_frio" },
            { label: "3. Vento forte", nextNodeId: "vento_frio" },
        ],
    },

    chuva_frio: {
        id: "chuva_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "casaco impermeável, calça e bota"
                : "jaqueta, calça e tênis"
            }.`,
    },

    vento_frio: {
        id: "vento_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "casaco, calça e bota"
                : "jaqueta corta-vento e calça"
            }.`,
    },
};