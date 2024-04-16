import { InputState } from "../DataTypes/InputState";
import { Vector2 } from "../Math/Vector2";

/**
 * Utility class for time-related operations.
 * 
 * Example Usage:
 * ```ts
 * Debug.Log(Time.deltaTime); // Output: Time { deltaTime: 0 }
 * ```
 */
export class NetworkManager {
    public static IsMaster: boolean;
    public static GenerateGuid() : string;
}
