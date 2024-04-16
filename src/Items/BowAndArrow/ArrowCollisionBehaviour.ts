import { CobaltCollisionScript } from "../../Cobalt.Lib/Behaviours/CobaltCollisionScript";
import { Collider } from "../../Cobalt.Lib/Unity/Collider";
import { ArrowBehaviour } from "./ArrowBehaviour";
import { BowAndArrowSFXBehaviour } from "./BowAndArrowSFXBehaviour";

export class ArrowCollisionBehaviour extends CobaltCollisionScript {

    public static References = {
        Arrow1 : {
            CobaltNetworkScript: 0,
        },
    };

    private _isHit : boolean;

    public Start(): void {
    }
    public Update(): void {
        if(this._isHit)
        {
            this.GetScript<ArrowBehaviour>(
                ArrowCollisionBehaviour.References.Arrow1.CobaltNetworkScript).Stop();
            
            BowAndArrowSFXBehaviour.Instance.PlayAtPosition(
                BowAndArrowSFXBehaviour.Clips.shieldwoodclashB07, this.transform.GetPosition());

            this._isHit = false;
        }
    }

    public OnTriggerEnter(collision: Collider): void {
        this._isHit = true;
    }
    public OnTriggerStay(collision: Collider): void {

    }
    public OnTriggerExit(collision: Collider): void {
    }
}
