
import { EnemyNetworkBehaviour } from "./EnemyNetworkBehaviour";
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { Debug } from "../Cobalt.Lib/Utilities/Debug";

export class NPCSpawnerBehaviour extends CobaltScript {
    public static References = {
        BandwagonMaskTint9 : {
            CobaltNetworkScript: 9,
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

    public TrySpawnNext() {
        for (let i = 0; i < this.GetReferenceLength(); i++) {
            var enemyNetworkBehaviour = this.GetScript<EnemyNetworkBehaviour>(i);
            if(!enemyNetworkBehaviour.CheckIsActive())
            {
                enemyNetworkBehaviour.Reset();
                return true;
            }
        }
        return false;
    }
}
