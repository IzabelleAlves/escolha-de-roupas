import { DecisionNode } from "../types/tree";
import { calorTree } from "./calor";
import { frioTree } from "./frio";

export const tree: Record<string, DecisionNode> = {
    start: {
        id: "start",
        question: "Qual a temperatura?",
        options: [
            { label: "1. Calor", nextNodeId: "clima_calor" },
            { label: "2. Frio", nextNodeId: "clima_frio" },
        ],
    },

    ...calorTree,
    ...frioTree,
};