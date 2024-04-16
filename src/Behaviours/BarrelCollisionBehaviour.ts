
import { CobaltCollisionScript } from "../Cobalt.Lib/Behaviours/CobaltCollisionScript";
import { CobaltScript } from "../Cobalt.Lib/Behaviours/CobaltScript";
import { BoxCollider } from "../Cobalt.Lib/Unity/BoxCollider";
import { Collider } from "../Cobalt.Lib/Unity/Collider";
import { ParticleSystem } from "../Cobalt.Lib/Unity/ParticleSystem";
import { Transform } from "../Cobalt.Lib/Unity/Transform";
import { Debug } from "../Cobalt.Lib/Utilities/Debug";
import { MusicBehaviour } from "./MusicBehaviour";
import { SFXBehaviour } from "./SFXBehaviour";

export class BarrelCollisionBehaviour extends CobaltCollisionScript {
    public static References = {
        Barrel1B : {
            Transform: 3,
        },
        BarrelBehaviour : {
            BoxCollider: 2,
        },
        FXAerialExplosionAA : {
            ParticleSystem: 1,
        },
        GameManager : {
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

    public OnTriggerEnter(collision: Collider): void {

        // Debug.Log("Barrel Hit!");

        var particleSystem = this.GetComponent<ParticleSystem>(
            BarrelCollisionBehaviour.References.FXAerialExplosionAA.ParticleSystem);

        particleSystem.Stop();
        particleSystem.Clear();
        particleSystem.Play();

        this.GetComponent<BoxCollider>(
            BarrelCollisionBehaviour.References.BarrelBehaviour.BoxCollider).enabled = false;

        this.GetComponent<Transform>(
            BarrelCollisionBehaviour.References.Barrel1B.Transform).gameObject.active = false;

        SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.ExplosionRoundStart, this.transform.GetPosition());
        SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.E10SecondCountDown, this.transform.GetPosition());

        SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.shieldmetalclash01, this.transform.GetPosition());

        this.ExecuteDelayed(10.5, ()=>{
            SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.RoundStart, this.transform.GetPosition());

            MusicBehaviour.Instance.PlaySong(MusicBehaviour.Clips.SpartanTotalWarriorOSTBattleDrums);
        });
    }

    public Reset(){
        var particleSystem = this.GetComponent<ParticleSystem>(
            BarrelCollisionBehaviour.References.FXAerialExplosionAA.ParticleSystem);
            
        particleSystem.Stop();
        particleSystem.Clear();

        this.GetComponent<BoxCollider>(
            BarrelCollisionBehaviour.References.BarrelBehaviour.BoxCollider).enabled = true;

        this.GetComponent<Transform>(
            BarrelCollisionBehaviour.References.Barrel1B.Transform).gameObject.active = true;
    }

    public OnTriggerStay(collision: Collider): void {
    }
    public OnTriggerExit(collision: Collider): void {
    }
}
