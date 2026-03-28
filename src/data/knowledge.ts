import { DecisionNode } from "../types/tree";

export const tree: Record<string, DecisionNode> = {
    start: {
        id: "start",
        question: "Qual a temperatura?",
        options: [
            { label: "1. Calor", nextNodeId: "calor" },
            { label: "2. Frio", nextNodeId: "frio" },
        ],
    },

    // ===== CALOR =====
    calor: {
        id: "calor",
        question: "Para onde você vai?",
        options: [
            { label: "1. Praia", nextNodeId: "praia" },
            { label: "2. Evento", nextNodeId: "evento_calor" },
            { label: "3. Casa", nextNodeId: "casa_calor" },
        ],
    },

    evento_calor: {
        id: "evento_calor",
        question: "O evento é formal?",
        options: [
            { label: "1. Sim", nextNodeId: "formal_calor" },
            { label: "2. Não", nextNodeId: "casual_calor" },
        ],
    },

    formal_calor: {
        id: "formal_calor",
        result: (profile) => {
            if (profile.prioridade === "conforto") {
                return "👔 Sugestão: Roupa formal leve (linho), confortável para o calor.";
            }
            return "✨ Sugestão: Look elegante com camisa social e calça.";
        },
    },

    casual_calor: {
        id: "casual_calor",
        result: (profile) => {
            if (profile.estilo === "moderno") {
                return "🔥 Sugestão: Camiseta oversized + short + tênis.";
            }
            return "🙂 Sugestão: Camiseta + bermuda (leve e confortável).";
        },
    },

    praia: {
        id: "praia",
        result: () => {
            return "🏖️ Sugestão: Roupa de praia leve e confortável.";
        },
    },

    casa_calor: {
        id: "casa_calor",
        result: () => {
            return "🏠 Sugestão: Roupa leve para relaxar em casa.";
        },
    },

    // ===== FRIO =====
    frio: {
        id: "frio",
        question: "Você vai sair?",
        options: [
            { label: "1. Sim", nextNodeId: "sair_frio" },
            { label: "2. Não", nextNodeId: "casa_frio" },
        ],
    },

    sair_frio: {
        id: "sair_frio",
        question: "É um evento formal?",
        options: [
            { label: "1. Sim", nextNodeId: "formal_frio" },
            { label: "2. Não", nextNodeId: "casual_frio" },
        ],
    },

    formal_frio: {
        id: "formal_frio",
        result: () => {
            return "🧥 Sugestão: Roupa elegante com casaco.";
        },
    },

    casual_frio: {
        id: "casual_frio",
        result: () => {
            return "🧢 Sugestão: Roupa casual com casaco confortável.";
        },
    },

    casa_frio: {
        id: "casa_frio",
        result: () => {
            return "🛋️ Sugestão: Moletom confortável para ficar em casa.";
        },
    },
};