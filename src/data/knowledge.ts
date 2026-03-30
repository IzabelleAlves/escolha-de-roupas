import { DecisionNode } from "../types/tree";

export const tree: Record<string, DecisionNode> = {
    start: {
        id: "start",
        question: "Qual a temperatura?",
        options: [
            { label: "1. Calor", nextNodeId: "clima_calor" },
            { label: "2. Frio", nextNodeId: "clima_frio" },
        ],
    },

    // ================= CALOR =================
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
                ? "um vestido leve com sandália e levar guarda-chuva ☔"
                : "camiseta, bermuda e chinelo com guarda-chuva ☔"
            }.`,
    },

    vento_calor: {
        id: "vento_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um short com blusa ajustada e tênis 👟"
                : "camiseta com bermuda e tênis 👟"
            }.`,
    },

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

    // ===== TRABALHO =====
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
                ? "um vestido midi leve com sandália 👗"
                : "camisa social leve com calça e sapato 👔"
            }.`,
    },

    formal_noite_calor: {
        id: "formal_noite_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "uma blusa elegante com saia e salto 👠"
                : "camisa social com calça alfaiataria 👔"
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
                ? "short com camiseta leve e tênis 👟"
                : "camiseta com bermuda e tênis 👟"
            }.`,
    },

    casual_relax_calor: {
        id: "casual_relax_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "calça leve com blusa confortável 👚"
                : "camiseta com jeans leve 👖"
            }.`,
    },

    // ===== EVENTO =====
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
                ? "um vestido leve com sandália 🌤️"
                : "camisa polo com bermuda e tênis 👟"
            }.`,
    },

    evento_noite_calor: {
        id: "evento_noite_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "um vestido elegante com salto 🌙"
                : "camisa com calça e sapato 👔"
            }.`,
    },

    evento_informal_calor: {
        id: "evento_informal_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "short com blusa estilosa 👚"
                : "camiseta com bermuda 👕"
            }.`,
    },

    // ===== LAZER =====
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
                ? "biquíni com saída de praia 👙"
                : "bermuda de praia e regata 🩳"
            }.`,
    },

    shopping_calor: {
        id: "shopping_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "vestido leve com tênis 👟"
                : "camiseta com bermuda e tênis 👟"
            }.`,
    },

    parque_calor: {
        id: "parque_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "short com camiseta e tênis 🌳"
                : "regata com bermuda e tênis 🌳"
            }.`,
    },

    academia_calor: {
        id: "academia_calor",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "top com legging e tênis 🏋️"
                : "regata com short e tênis 🏋️"
            }.`,
    },

    // ================= FRIO =================
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
                ? "casaco impermeável, calça e bota 🌧️"
                : "jaqueta, calça e tênis 🌧️"
            }.`,
    },

    vento_frio: {
        id: "vento_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "casaco, calça e bota 💨"
                : "jaqueta corta-vento e calça 💨"
            }.`,
    },

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
                ? "blusa, calça e casaco 🧥"
                : "camisa, calça e casaco 🧥"
            }.`,
    },

    evento_frio: {
        id: "evento_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "vestido com sobretudo e bota ✨"
                : "terno com sobretudo ✨"
            }.`,
    },

    casa_frio: {
        id: "casa_frio",
        result: (p) =>
            `Minha sugestão é ${p.genero === "feminino"
                ? "moletom com legging 🛋️"
                : "moletom com calça 🛋️"
            }.`,
    },
};