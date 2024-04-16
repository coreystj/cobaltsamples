import { CobaltNetworkScript } from "../../Cobalt.Lib/Behaviours/CobaltNetworkScript";
import { FullBodyType } from "../../Cobalt.Lib/DataTypes/FullBodyType";
import { InputState } from "../../Cobalt.Lib/DataTypes/InputState";
import { TransformSpaceType } from "../../Cobalt.Lib/DataTypes/TransformSpaceType";
import { Vector3 } from "../../Cobalt.Lib/Math/Vector3";
import { InterComUserDTO } from "../../Cobalt.Lib/Models/InterComUserDTO";
import { BoxCollider } from "../../Cobalt.Lib/Unity/BoxCollider";
import { Rigidbody } from "../../Cobalt.Lib/Unity/Rigidbody";
import { Transform } from "../../Cobalt.Lib/Unity/Transform";
import { Debug } from "../../Cobalt.Lib/Utilities/Debug";
import { InputManager } from "../../Cobalt.Lib/Utilities/InputManager";
import { PlayerManager } from "../../Cobalt.Lib/Utilities/PlayerManager";
import { QuaternionUtilities } from "../../Cobalt.Lib/Utilities/QuaternionUtilities";
import { Time } from "../../Cobalt.Lib/Utilities/Time";
import { Vector3Utilities } from "../../Cobalt.Lib/Utilities/Vector3Utilities";
import { ArrowBehaviour } from "./ArrowBehaviour";
import { BowAndArrowSFXBehaviour } from "./BowAndArrowSFXBehaviour";
import { QuiverBehaviour } from "./QuiverBehaviour";

export class BowAndArrowBehaviour extends CobaltNetworkScript {

    public static References = {
        BowArrow : {
            BoxCollider: 4,
            Rigidbody: 5,
            Transform: 7,
        },
        ExitPoint : {
            Transform: 1,
        },
        MaxPowerPoint : {
            Transform: 3,
        },
        MinPowerPoint : {
            Transform: 2,
        },
        PullBone : {
            Transform: 0,
        },
        QuiverBehaviour : {
            CobaltScript: 6,
        },
    };


    private _pullBackTime: number = 2.0;
    private _time: number;
    private _pullBackForce: number;
    private _isPulling: boolean;

    private _currentArrow: ArrowBehaviour;

    private _quiverBehaviour: QuiverBehaviour;
    private _transform: Transform;
    private _rigidbody: Rigidbody;
    private _boxCollider: BoxCollider;

    private _minPower: Transform;
    private _maxPower: Transform;
    private _pullBone: Transform;
    private _exitPoint: Transform;

    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {
        this._quiverBehaviour = this.GetScript<QuiverBehaviour>(
            BowAndArrowBehaviour.References.QuiverBehaviour.CobaltScript);

        this._transform = this.GetComponent<Transform>(
            BowAndArrowBehaviour.References.QuiverBehaviour.CobaltScript);

        this._rigidbody = this.GetComponent<Rigidbody>(
            BowAndArrowBehaviour.References.BowArrow.Rigidbody);

        this._boxCollider = this.GetComponent<BoxCollider>(
            BowAndArrowBehaviour.References.BowArrow.BoxCollider);

        this._minPower = this.GetComponent<Transform>(
            BowAndArrowBehaviour.References.MinPowerPoint.Transform);

        this._maxPower = this.GetComponent<Transform>(
            BowAndArrowBehaviour.References.MaxPowerPoint.Transform);

        this._pullBone = this.GetComponent<Transform>(
            BowAndArrowBehaviour.References.PullBone.Transform);

        this._exitPoint = this.GetComponent<Transform>(
            BowAndArrowBehaviour.References.PullBone.Transform);

        this._rigidbody.isKinematic = true;
    }

    public Update() {
        if(this._isPulling)
        {
            this.UpdateArms();
        }
        else{
            PlayerManager.ReleaseSegment(FullBodyType.LeftHand);
            PlayerManager.ReleaseSegment(FullBodyType.RightHand);
        }

        var rawPosition = PlayerManager.GetSegmentPosition(FullBodyType.LeftHand, TransformSpaceType.World);
        this.transform.SetPosition(rawPosition);

        var rawRotation = PlayerManager.GetSegmentRotation(FullBodyType.LeftHand, TransformSpaceType.World);
        this.transform.SetRotation(rawRotation);

        if(InputManager.PrimaryButton == InputState.OnPressed){
            BowAndArrowSFXBehaviour.Instance.PlayAtPosition(
                BowAndArrowSFXBehaviour.Clips.medwpn2bowload02, this.transform.GetPosition());
            this._isPulling = true;
            this._currentArrow = this._quiverBehaviour.GetNext();
            this._currentArrow.Reset();
            this._pullBackForce = 0;
            this._time = 0;
        }
        if(InputManager.PrimaryButton == InputState.OnReleased){
            BowAndArrowSFXBehaviour.Instance.PlayAtPosition(
                BowAndArrowSFXBehaviour.Clips.bowloadshot, this.transform.GetPosition());
            this._isPulling = false;
            this._pullBone.position = this._minPower.position;
            
            this._currentArrow.Fire(
                    this._exitPoint.position, 
                    PlayerManager.GetCameraRotation(), 
                    this._pullBackForce
                );
        }

        if(this._isPulling){
            this._time += Time.deltaTime;

            this.CalculatePullBackForce();
            this.ExecutePullbackAnimation();

            this._currentArrow.Align();
        }
    }

    public UpdateArms() {
        PlayerManager.SetSegmentPosition(FullBodyType.LeftHand, new Vector3(-0.005, -0.219, 0.379), TransformSpaceType.Local)
        PlayerManager.SetSegmentRotation(FullBodyType.LeftHand, QuaternionUtilities.FromEuler(new Vector3(-0.41, 15.759, 126.49)), TransformSpaceType.Local)
    }

    public CalculatePullBackForce() {
        this._pullBackForce = this._time / this._pullBackTime;
        if(this._pullBackForce > 1.0)
        {
            this._pullBackForce = 1.0;
        }
    }

    public ExecutePullbackAnimation() {
        var startPosition = this._minPower.position;
        var endPosition = this._maxPower.position;
        var pullBackPosition : Vector3 = Vector3Utilities.Lerp(startPosition, endPosition, this._pullBackForce);
        PlayerManager.SetSegmentPosition(FullBodyType.RightHand, pullBackPosition, TransformSpaceType.World);

        this._pullBone.position = pullBackPosition;
    }

    public OnGlobalMessageReceived(data: string): void {
    }
    public OnObjectMessageReceived(data: string): void {
    }
    public OnLeftRoom(interComUserDTO: InterComUserDTO): void {
    }
    public OnJoinedRoom(interComUserDTO: InterComUserDTO): void {
    }
    public OnMasterChanged(interComUserDTO: InterComUserDTO): void {
    }
}
