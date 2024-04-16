
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { NPCSpawnerBehaviour } from "../Behaviours/NPCSpawnerBehaviour";


export class NPCManager extends CobaltScript {
    public static References = {
        Bandwagons : {
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
        var spawner = this.GetScript<NPCSpawnerBehaviour>(
            NPCManager.References.Bandwagons.CobaltScript);

        spawner.TrySpawnNext();
    }
}
