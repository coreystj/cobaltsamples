
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { Image } from "../Cobalt.Lib/Unity/Image";
import { RectTransform } from "../Cobalt.Lib/Unity/RectTransform";
import { Time } from "../Cobalt.Lib/Utilities/Time";


export class ProgressBarBehaviour extends CobaltScript {
    private _time: number;
    public static References = {
        ProgressBarBehaviour : {
            Image: 0,
            RectTransform: 1,
        },
    };



    constructor(id: string) {
        super(id);
        this.Reset();
    }

    public Set(value: number){
        this._time = 5;
        this.GetComponent<Image>(ProgressBarBehaviour.References.ProgressBarBehaviour.Image).fillAmount = value;
        this.GetComponent<RectTransform>(
            ProgressBarBehaviour.References.ProgressBarBehaviour.RectTransform).gameObject.active = true;
    }

    public Reset(){
        this._time = 0.0;
        this.GetComponent<RectTransform>(
            ProgressBarBehaviour.References.ProgressBarBehaviour.RectTransform).gameObject.active = false;

    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
        if(this._time > 0)
        {
            this._time -= Time.deltaTime;
        }
        else
        {
            this.Reset();
        }
    }

}
