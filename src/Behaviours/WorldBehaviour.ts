
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";

export class WorldBehaviour extends CobaltScript {
    public static References = {
        PathManager : {
            CobaltScript: 0,
        },
    };


    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
    }
}
