import { CobaltScript } from "../../Cobalt.Lib/Behaviours/CobaltScript";
import { ArrowBehaviour } from "./ArrowBehaviour";


export class QuiverBehaviour extends CobaltScript {
    public static References = {
        Arrow8 : {
            CobaltNetworkScript: 7,
        },
    };

    private _currentArrowIndex : number = 0;

    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
    }

    public GetNext() : ArrowBehaviour {
        this._currentArrowIndex++;
        if(this._currentArrowIndex >= this.GetReferenceLength()){
            this._currentArrowIndex = 0;
        }

        return this.GetScript<ArrowBehaviour>(this._currentArrowIndex);
    }
}
