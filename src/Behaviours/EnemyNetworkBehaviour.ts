import { CobaltNetworkScript } from "../Cobalt.Lib/Behaviours/CobaltNetworkScript";
import { GameManager } from "../Managers/GameManager";
import { WorldBehaviour } from "./WorldBehaviour";
import { PathBehaviour } from "./PathBehaviour";
import { Vector3 } from "../Cobalt.Lib/Math/Vector3";
import { Time } from "../Cobalt.Lib/Utilities/Time";
import { WorldManager } from "../Managers/WorldManager";
import { PathManager } from "../Managers/PathManager";
import { Transform } from "../Cobalt.Lib/Unity/Transform";
import { Vector3Utilities } from "../Cobalt.Lib/Utilities/Vector3Utilities";
import { Quaternion } from "../Cobalt.Lib/Math/Quaternion";
import { QuaternionUtilities } from "../Cobalt.Lib/Utilities/QuaternionUtilities";
import { Debug } from "../Cobalt.Lib/Utilities/Debug";
import { InterComUserDTO } from "../Cobalt.Lib/Models/InterComUserDTO";
import { TransposerDTO } from "../Models/TransposerDTO";
import { SFXBehaviour } from "./SFXBehaviour";
import { ProgressBarBehaviour } from "./ProgressBarBehaviour";
import { BoxCollider } from "../Cobalt.Lib/Unity/BoxCollider";
import { ParticleSystem } from "../Cobalt.Lib/Unity/ParticleSystem";

export class EnemyNetworkBehaviour extends CobaltNetworkScript {

    public CurrentPathIndex : number = 0;
    public Speed: number = 1.0;
    private _pathBehaviour : PathBehaviour;
    private _gameManager : GameManager;

    public _hp : number = 0;

    public static References = {
        BandwagonMaskTint : {
            Animator: 0,
            Transform: 1,
            BoxCollider: 6,
        },
        FXClusterExplosionAC : {
            ParticleSystem: 4,
        },
        GameManager : {
            CobaltScript: 2,
        },
        ProgressBarBehaviour : {
            CobaltScript: 3,
        },
        WarbandMesh : {
            Transform: 5,
        },
    };



    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {


        this._gameManager = this.GetScript(
            EnemyNetworkBehaviour.References.GameManager.CobaltScript);

        var worldManager : WorldManager = this._gameManager.GetScript(
            GameManager.References.WorldManager.CobaltScript);

        var worldBehaviour : WorldBehaviour = worldManager.GetScript(
            WorldManager.References.WorldBehaviour.CobaltScript);

        var pathManager : PathManager = worldBehaviour.GetScript(
            WorldBehaviour.References.PathManager.CobaltScript);

        this._pathBehaviour = pathManager.GetScript(
            PathManager.References.PathBehaviour.CobaltScript);

        this.Reset();
    }

    public Update() {

        if(this._hp > 0)
        {
            var position: Vector3 = this.transform.GetPosition();

            var targetPosition: Vector3 = this.ReadTransform(this.CurrentPathIndex);

            if(Math.abs(Vector3Utilities.Distance(position, targetPosition)) > 0.01){
                position = Vector3Utilities.MoveTowards(position, targetPosition, Time.deltaTime * this.Speed);

                var lookDirection : Vector3 = Vector3.Minus(targetPosition, position);

                var lookRotation : Quaternion = QuaternionUtilities.LookRotation(lookDirection, Vector3.up);

                var destinationRotation : Quaternion = QuaternionUtilities.Lerp(
                    this.transform.GetRotation(), lookRotation, Time.deltaTime * this.Speed);

                this.transform.SetPosition(position);
                this.transform.SetRotation(destinationRotation);
            }
            else
            {
                this.CurrentPathIndex++;

                if(this.CurrentPathIndex >= this._pathBehaviour.GetReferenceLength()) {
                    this.GetComponent<Transform>(
                        EnemyNetworkBehaviour.References.BandwagonMaskTint.Transform).gameObject.active = false;
                }
            }
        }
    }

    public Reset() {
        this._hp = 100.0;

        this.CurrentPathIndex = 0;
        var targetPosition: Vector3 = this.ReadTransform(this.CurrentPathIndex);
        this.transform.SetPosition(targetPosition);

        this.GetComponent<Transform>(
            EnemyNetworkBehaviour.References.BandwagonMaskTint.Transform).gameObject.active = true;

        this.GetComponent<BoxCollider>(
            EnemyNetworkBehaviour.References.BandwagonMaskTint.BoxCollider).enabled = true;
        this.GetComponent<Transform>(
            EnemyNetworkBehaviour.References.WarbandMesh.Transform).gameObject.active = true;

        this.GetScript<ProgressBarBehaviour>(
            EnemyNetworkBehaviour.References.ProgressBarBehaviour.CobaltScript).Reset();
    }

    public ReadTransform(index: number) : Vector3{
        if(index >= this._pathBehaviour.GetReferenceLength()){
            return Vector3.zero;
        }
        var vertexTransform : Transform = this._pathBehaviour.GetComponent<Transform>(index);
        return vertexTransform.position;
    }

    private _currentSFXNumber = SFXBehaviour.Clips.shieldmetalclash01;

    public Hit() {
        this._hp -= 20.0;
        SFXBehaviour.Instance.PlayAtPosition(
            SFXBehaviour.Clips.shieldmetalclash01 + this._currentSFXNumber, 
            this.transform.GetPosition());

        this._currentSFXNumber++;
        if(this._currentSFXNumber > SFXBehaviour.Clips.shieldmetalclash05)
        {
            this._currentSFXNumber = SFXBehaviour.Clips.shieldmetalclash01;
        }

        if(this._hp <= 0.0)
        {
            // SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.Headshot, this.transform.GetPosition());
            SFXBehaviour.Instance.PlayAtPosition(SFXBehaviour.Clips.ExplosionRoundStart, this.transform.GetPosition());
            this.GetComponent<BoxCollider>(
                EnemyNetworkBehaviour.References.BandwagonMaskTint.BoxCollider).enabled = false;

            this.GetComponent<Transform>(
                EnemyNetworkBehaviour.References.WarbandMesh.Transform).gameObject.active = false;

            this.GetComponent<ParticleSystem>(EnemyNetworkBehaviour.References.FXClusterExplosionAC.ParticleSystem).Stop();  
            this.GetComponent<ParticleSystem>(EnemyNetworkBehaviour.References.FXClusterExplosionAC.ParticleSystem).Clear();  
            this.GetComponent<ParticleSystem>(EnemyNetworkBehaviour.References.FXClusterExplosionAC.ParticleSystem).Play();  

            this.ExecuteDelayed(3, ()=>{
                this.GetComponent<Transform>(
                    EnemyNetworkBehaviour.References.BandwagonMaskTint.Transform).gameObject.active = false;
            });
        }
        this.GetScript<ProgressBarBehaviour>(
            EnemyNetworkBehaviour.References.ProgressBarBehaviour.CobaltScript).Set(this._hp / 100.0);
    }

    public CheckIsActive() : boolean {
        return this.GetComponent<Transform>(
            EnemyNetworkBehaviour.References.BandwagonMaskTint.Transform).gameObject.active;
    }
    
    public OnGlobalMessageReceived(data: string): void {
    }

    public OnObjectMessageReceived(data: string): void {
        Debug.Log("Received Position: " + data);
        var transposer: TransposerDTO = TransposerDTO.FromJson(data);
        this.transform.SetPosition(transposer.Origin);
        this.transform.SetRotation(transposer.Rotation);
    }
    public OnLeftRoom(interComUserDTO: InterComUserDTO): void {
    }

    public OnJoinedRoom(interComUserDTO: InterComUserDTO): void {
        Debug.Log("User joined: " + interComUserDTO.Name);
        this.Send(new TransposerDTO(
            this.transform.GetPosition(), 
            new Vector3(1,1,1), 
            this.transform.GetRotation()
        ).ToJson());
    }
    public OnMasterChanged(interComUserDTO: InterComUserDTO): void {
    }
}
