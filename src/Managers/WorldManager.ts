
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { NPCManager } from "./NPCManager";

export class WorldManager extends CobaltScript {
    public static References = {
        NPCManager : {
            CobaltScript: 1,
        },
        WorldBehaviour : {
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

    public SpawnNext(){
        this.GetScript<NPCManager>(
            WorldManager.References.NPCManager.CobaltScript).SpawnNext();
    }
}
