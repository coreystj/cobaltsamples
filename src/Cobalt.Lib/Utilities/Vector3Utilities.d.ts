import { Vector3 } from "../Math/Vector3";

/**
 * Utility class for time-related operations.
 * 
 * Example Usage:
 * ```ts
 * Debug.Log(Time.deltaTime); // Output: Time { deltaTime: 0 }
 * ```
 */
export class Vector3Utilities {
    public static Lerp(forward : Vector3, up : Vector3, delta: number) : Vector3;
    public static Distance(v1: Vector3, v2: Vector3): number;
    public static MoveTowards(current : Vector3, target : Vector3, maxDistanceDelta : number) : Vector3;
}
