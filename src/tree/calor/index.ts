import { climaCalor } from "./clima";
import { trabalhoCalor } from "./trabalho";
import { eventoCalor } from "./evento";
import { lazerCalor } from "./lazer";

export const calorTree = {
    ...climaCalor,
    ...trabalhoCalor,
    ...eventoCalor,
    ...lazerCalor,
};