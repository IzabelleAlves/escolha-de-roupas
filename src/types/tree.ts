export type UserProfile = {
    estilo: "casual" | "moderno" | "elegante";
    prioridade: "conforto" | "estetica";
};

export type DecisionOption = {
    label: string;
    nextNodeId: string;
};

export type DecisionNode = {
    id: string;
    question?: string;
    options?: DecisionOption[];
    result?: (profile: UserProfile) => string;
};