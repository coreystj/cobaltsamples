
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";

export class PathManager extends CobaltScript {
    public static References = {
        PathBehaviour : {
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
