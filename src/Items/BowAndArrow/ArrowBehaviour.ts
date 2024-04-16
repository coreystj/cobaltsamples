import { CobaltNetworkScript } from "../../Cobalt.Lib/Behaviours/CobaltNetworkScript";
import { Quaternion } from "../../Cobalt.Lib/Math/Quaternion";
import { Vector3 } from "../../Cobalt.Lib/Math/Vector3";
import { InterComUserDTO } from "../../Cobalt.Lib/Models/InterComUserDTO";
import { BoxCollider } from "../../Cobalt.Lib/Unity/BoxCollider";
import { ParticleSystem } from "../../Cobalt.Lib/Unity/ParticleSystem";
import { Rigidbody } from "../../Cobalt.Lib/Unity/Rigidbody";
import { Transform } from "../../Cobalt.Lib/Unity/Transform";
import { Debug } from "../../Cobalt.Lib/Utilities/Debug";
import { QuaternionUtilities } from "../../Cobalt.Lib/Utilities/QuaternionUtilities";
import { Vector3Utilities } from "../../Cobalt.Lib/Utilities/Vector3Utilities";

export class ArrowBehaviour extends CobaltNetworkScript {
    public static References = {
        Arrow : {
            Rigidbody: 2,
            BoxCollider: 3,
            Transform: 4,
        },
        BurstParticles : {
            ParticleSystem: 6,
        },
        ExitPoint : {
            Transform: 1,
        },
        PullBone : {
            Transform: 0,
        },
        TrailParticles : {
            ParticleSystem: 5,
        },
    };


    private _hitRotation : Quaternion;
    private _hitPosition : Vector3;

    private _rigidbody : Rigidbody;
    private _boxCollider : BoxCollider;

    private _transform : Transform;
    private _pullBone : Transform;
    private _exitPoint : Transform;
    private _isFiring : boolean;
    private _hasLanded : boolean;

    private _burstParticles : ParticleSystem;
    private _trailParticles : ParticleSystem;

    constructor(id: string) {
        super(id);
    }

    // Initialization, executed once
    public Start() {
        this._transform = this.GetComponent<Transform>(ArrowBehaviour.References.Arrow.Transform);
        this._pullBone = this.GetComponent<Transform>(ArrowBehaviour.References.PullBone.Transform);
        this._exitPoint = this.GetComponent<Transform>(ArrowBehaviour.References.ExitPoint.Transform);

        this._rigidbody = this.GetComponent<Rigidbody>(ArrowBehaviour.References.Arrow.Rigidbody);
        this._boxCollider = this.GetComponent<BoxCollider>(ArrowBehaviour.References.Arrow.BoxCollider);

        this._burstParticles = this.GetComponent<ParticleSystem>(ArrowBehaviour.References.BurstParticles.ParticleSystem);
        this._trailParticles = this.GetComponent<ParticleSystem>(ArrowBehaviour.References.TrailParticles.ParticleSystem);

        this._burstParticles.emission.enabled = false;
        this._trailParticles.emission.enabled = false;
    }

    public Update() {
        if(this._isFiring)
        {
            this._transform.rotation = QuaternionUtilities.LookRotation(this._rigidbody.velocity, Vector3.up);
            this._hitPosition = this._transform.position;
            this._hitRotation = this._transform.rotation;
        }
        else if(this._hasLanded){
            this._transform.position = this._hitPosition;
            this._transform.rotation = this._hitRotation;
        }
    }

    public Reset() {
        this._isFiring = false;
        this._burstParticles.emission.enabled = false;
        this._trailParticles.emission.enabled = false;
        this._boxCollider.enabled = false;
        this.GetComponent<Transform>(
            ArrowBehaviour.References.Arrow.Transform).gameObject.active = true;
    }
    public Align() {
        this._hasLanded = false;
        this._isFiring = false;
        this._rigidbody.isKinematic = true;
        var angularVelocity : Vector3 = this._rigidbody.angularVelocity;
        angularVelocity.x = 0;
        angularVelocity.y = 0;
        angularVelocity.z = 0;
        this._rigidbody.angularVelocity = angularVelocity;

        var velocity : Vector3 = this._rigidbody.velocity;
        velocity.x = 0;
        velocity.y = 0;
        velocity.z = 0;
        this._rigidbody.velocity = velocity;

        this._transform.position = this._pullBone.position;
        var forward : Vector3 = Vector3.Minus(this._exitPoint.position, this._pullBone.position);
        this._transform.rotation = QuaternionUtilities.LookRotation(forward, Vector3.up);
    }

    public Fire(position: Vector3, rotation: Quaternion, force: number) {
        this._rigidbody.isKinematic = false;
        var direction = Vector3.Add(position, QuaternionUtilities.Multiply(rotation, Vector3.forward));
        var velocity = QuaternionUtilities.Multiply(rotation, Vector3.forward);

        this.transform.SetPosition(direction);
        force = force * 50;

        velocity.x *= force;
        velocity.y *= force;
        velocity.z *= force;

        this._rigidbody.velocity = velocity;
        this._isFiring = true;

        this._burstParticles.emission.enabled = false;
        this._trailParticles.emission.enabled = true;
        this._boxCollider.enabled = true;
    }

    public Stop() {

        this._hasLanded = true;
        this._isFiring = false;
        this._burstParticles.emission.enabled = true;
        this._burstParticles.Play();
        this._trailParticles.emission.enabled = false;
        this._rigidbody.isKinematic = true;
        this._boxCollider.enabled = false;


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
