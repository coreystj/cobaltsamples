

import { Quaternion } from "../Cobalt.Lib/Math/Quaternion";
import { Vector3 } from "../Cobalt.Lib/Math/Vector3";

export class TransposerDTO {
    public Origin: Vector3;
    public Scale: Vector3;
    public Rotation: Quaternion;

    constructor(origin: Vector3, scale: Vector3, rotation: Quaternion) {
        this.Origin = origin;
        this.Scale = scale;
        this.Rotation = rotation;
    }

    public ToJson() : string{
        return JSON.stringify(this);
    }

    public static FromJson(rawJson : string) : TransposerDTO{
        return JSON.parse(rawJson);
    }
}
