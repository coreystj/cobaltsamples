
import { CobaltAudioScript } from "../Cobalt.Lib/Behaviours/CobaltAudioScript";

export class MusicBehaviour extends CobaltAudioScript {
    public static Instance: MusicBehaviour;

    public static Clips = {
        SpartanTotalWarriorOSTBattleDrums : 0,
        SpartanTotalWarriorOSTKillSwitch : 1,
    };
    
    constructor(id: string) {
        super(id);
        MusicBehaviour.Instance = this;
    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
    }
}
