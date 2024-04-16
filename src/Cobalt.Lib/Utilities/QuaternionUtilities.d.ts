import { Quaternion } from "../Math/Quaternion";
import { Vector3 } from "../Math/Vector3";

/**
 * Utility class for time-related operations.
 * 
 * Example Usage:
 * ```ts
 * Debug.Log(Time.deltaTime); // Output: Time { deltaTime: 0 }
 * ```
 */
export class QuaternionUtilities {
    public static Multiply(direction: Quaternion, forward: Vector3) : Vector3
    public static FromEuler(eulerAngles: Vector3): Quaternion;
    public static Lerp(forward : Quaternion, up : Quaternion, delta: number) : Quaternion;
    public static LookRotation(forward : Vector3, up : Vector3) : Quaternion;
}
