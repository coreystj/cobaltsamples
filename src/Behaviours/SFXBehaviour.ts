
import { CobaltAudioScript } from "../Cobalt.Lib/Behaviours/CobaltAudioScript";

export class SFXBehaviour extends CobaltAudioScript {
    public static Instance: SFXBehaviour;
    public static Clips = {
        E10SecondCountDown : 0,
        BloodShed : 1,
        ChooseYourWeapon : 2,
        GameOver : 3,
        GoodLuck : 4,
        Headshot : 5,
        Letthegamesbegin : 6,
        RoundFight : 7,
        RoundStart : 8,
        WElcometotidalknights : 9,
        YouarethelastoneStanding : 10,
        ExplosionRoundStart : 11,
        Roundintro : 12,
        RoundOver : 13,
        shieldmetalclash01 : 14,
        shieldmetalclash02 : 15,
        shieldmetalclash03 : 16,
        shieldmetalclash04 : 17,
        shieldmetalclash05 : 18,
    };


    
    constructor(id: string) {
        super(id);
        SFXBehaviour.Instance = this;
    }

    // Initialization, executed once
    public Start() {
    }

    public Update() {
    }
}
