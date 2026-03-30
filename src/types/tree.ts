type UserProfile = {
    estilo: "casual" | "moderno" | "elegante";
    prioridade: "conforto" | "estetica";
    genero: "masculino" | "feminino";
};

type DecisionOption = {
    label: string;
    nextNodeId: string;
};

type DecisionNode = {
    id: string;
    question?: string;
    options?: DecisionOption[];
    result?: (profile: UserProfile) => string;
};

export { UserProfile, DecisionNode, DecisionOption };