import { DecisionNode } from "../../types/tree";

export const trabalhoCalor: Record<string, DecisionNode> = {
    ambiente_trabalho_calor: {
        id: "ambiente_trabalho_calor",
        question: "O ambiente é:",
        options: [
            { label: "1. Formal", nextNodeId: "horario_trabalho_formal_calor" },
            { label: "2. Casual", nextNodeId: "horario_trabalho_casual_calor" },
        ],
    },

    horario_trabalho_formal_calor: {
        id: "horario_trabalho_formal_calor",
        question: "É de dia ou à noite?",
        options: [
            { label: "1. Dia", nextNodeId: "formal_dia_calor" },
            { label: "2. Noite", nextNodeId: "formal_noite_calor" },
        ],
    },

    formal_dia_calor: {
        id: "formal_dia_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um vestido midi leve com sandália"
                : "camisa social leve com calça e sapato"
            }.`,
    },

    formal_noite_calor: {
        id: "formal_noite_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "uma blusa elegante com saia e salto"
                : "camisa social com calça alfaiataria"
            }.`,
    },

    horario_trabalho_casual_calor: {
        id: "horario_trabalho_casual_calor",
        question: "Você vai se movimentar muito?",
        options: [
            { label: "1. Sim", nextNodeId: "casual_ativo_calor" },
            { label: "2. Não", nextNodeId: "casual_relax_calor" },
        ],
    },

    casual_ativo_calor: {
        id: "casual_ativo_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "short com camiseta leve e tênis"
                : "camiseta com bermuda e tênis"
            }.`,
    },

    casual_relax_calor: {
        id: "casual_relax_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "calça leve com blusa confortável"
                : "camiseta com jeans leve"
            }.`,
    },
};