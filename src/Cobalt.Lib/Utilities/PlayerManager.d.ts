
import { FullBodyType } from "../DataTypes/FullBodyType";
import { TransformSpaceType } from "../DataTypes/TransformSpaceType";
import { Quaternion } from "../Math/Quaternion";
import { Vector3 } from "../Math/Vector3";

export class PlayerManager {
    public static GetCameraPosition(): Vector3;
    public static GetCameraRotation(): Quaternion;

    public static SetPosition(position: Vector3) : void;
    public static SetRotation(rotation: Quaternion) : void;

    public static ReleaseSegment(fullBodyType: FullBodyType) : void;
    
    public static SetSegmentPosition(fullBodyType: FullBodyType, position: Vector3, transformSpaceType : TransformSpaceType) : void;
    public static SetSegmentRotation(fullBodyType: FullBodyType, rotation: Quaternion, transformSpaceType : TransformSpaceType) : void;

    public static GetPosition() : Vector3;
    public static GetRotation() : Quaternion;

    public static GetSegmentPosition(fullBodyType: FullBodyType, transformSpaceType : TransformSpaceType) : Vector3;
    public static GetSegmentRotation(fullBodyType: FullBodyType, transformSpaceType : TransformSpaceType) : Quaternion;
}
