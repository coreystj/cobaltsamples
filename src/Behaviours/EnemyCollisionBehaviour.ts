import { CobaltCollisionScript } from "../Cobalt.Lib/Behaviours/CobaltCollisionScript";
import { Collider } from "../Cobalt.Lib/Unity/Collider";
import { Debug } from "../Cobalt.Lib/Utilities/Debug";
import { EnemyNetworkBehaviour } from "./EnemyNetworkBehaviour";


export class EnemyCollisionBehaviour extends CobaltCollisionScript {
    public static References = {
        BandwagonMaskTint : {
            CobaltNetworkScript: 0,
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

    public OnTriggerEnter(collision: Collider): void {
        this.GetScript<EnemyNetworkBehaviour>(
            EnemyCollisionBehaviour.References.BandwagonMaskTint.CobaltNetworkScript).Hit();
    }
    public OnTriggerStay(collision: Collider): void {
    }
    public OnTriggerExit(collision: Collider): void {
    }
}
