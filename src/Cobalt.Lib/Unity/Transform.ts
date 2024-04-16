import { Quaternion } from "../Math/Quaternion";
import { Vector3 } from "../Math/Vector3";
import { GameObject } from "./GameObject";

export class Transform {
    public gameObject : GameObject;
    public position : Vector3;
    public rotation : Quaternion;
    public localScale : Vector3;

    public localPosition : Vector3;
    public localRotation : Quaternion;

    
    public forward : Vector3;
}
