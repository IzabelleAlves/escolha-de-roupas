import { DecisionNode } from "../../types/tree";

export const eventoCalor: Record<string, DecisionNode> = {
    tipo_evento_calor: {
        id: "tipo_evento_calor",
        question: "Que tipo de evento?",
        options: [
            { label: "1. Formal", nextNodeId: "evento_formal_calor" },
            { label: "2. Informal", nextNodeId: "evento_informal_calor" },
        ],
    },

    evento_formal_calor: {
        id: "evento_formal_calor",
        question: "É de dia ou à noite?",
        options: [
            { label: "1. Dia", nextNodeId: "evento_dia_calor" },
            { label: "2. Noite", nextNodeId: "evento_noite_calor" },
        ],
    },

    evento_dia_calor: {
        id: "evento_dia_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um vestido leve com sandália"
                : "camisa polo com bermuda e tênis"
            }.`,
    },

    evento_noite_calor: {
        id: "evento_noite_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um vestido elegante com salto"
                : "camisa com calça e sapato"
            }.`,
    },

    evento_informal_calor: {
        id: "evento_informal_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "short com blusa estilosa"
                : "camiseta com bermuda"
            }.`,
    },
};