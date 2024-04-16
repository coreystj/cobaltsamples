
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { Debug } from "../Cobalt.Lib/Utilities/Debug";
import { Time } from "../Cobalt.Lib/Utilities/Time";
import { WorldManager } from "./WorldManager";

export class GameManager extends CobaltScript {
    private _timer : number = 0;
    public static References = {
        SFXManager : {
            CobaltSFXScript: 1,
        },
        WorldManager : {
            CobaltScript: 0,
        },
    };


    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {
    }

    // Executed once per frame
    public Update() {
        this._timer += Time.deltaTime;

        if(this._timer > 5.0){
            this._timer = 0;
            this.GetScript<WorldManager>(
                GameManager.References.WorldManager.CobaltScript).SpawnNext();
        }
    }
}
