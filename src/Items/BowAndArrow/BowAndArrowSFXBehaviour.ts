
import { CobaltAudioScript } from "../../Cobalt.Lib/Behaviours/CobaltAudioScript";

export class BowAndArrowSFXBehaviour extends CobaltAudioScript {
    public static Instance: BowAndArrowSFXBehaviour;
    public static Clips = {
        arrowwhoosh : 0,
        doorwoodclose01 : 1,
        shieldwoodclashB13 : 2,
        shieldwoodclashB07 : 3,
        medwpn2bowload02 : 4,
        bowloadshot : 5,
    };

    constructor(id: string) {
        super(id);
        BowAndArrowSFXBehaviour.Instance = this;
    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
    }

}
