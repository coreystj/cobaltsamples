import { InputState } from "../DataTypes/InputState";
import { Vector2 } from "../Math/Vector2";
import { Debug } from "./Debug";

/**
 * Utility class for time-related operations.
 * 
 * Example Usage:
 * ```ts
 * Debug.Log(Time.deltaTime); // Output: Time { deltaTime: 0 }
 * ```
 */
export class InputManager {
    public static EscapeKey: InputState;
    public static ReturnKey: InputState;
    public static SpaceBar: InputState;
    public static Analyze: InputState;
    public static SecondaryButton: InputState;
    public static PrimaryButton: InputState;

    public static Movement: Vector2;
    public static SecondaryJoystick: Vector2;

    // constructor(){
    //     InputManager.EscapeKey = InputState.Idling;
    //     InputManager.ReturnKey = InputState.Idling;
    //     InputManager.SpaceBar = InputState.Idling;
    //     InputManager.Analyze = InputState.Idling;
    //     InputManager.SecondaryButton = InputState.Idling;
    //     InputManager.PrimaryButton = InputState.Idling;

    //     InputManager.Movement = new Vector2(0,0);
    //     InputManager.SecondaryJoystick = new Vector2(0,0);
    // }

    // public SetMovement(value: Vector2) : void
    // {
    //     InputManager.Movement = new Vector2(value.x, value.y);
    // }

    // public SetSecondaryJoystick(value: Vector2) : void
    // {
    //     InputManager.SecondaryJoystick = new Vector2(value.x, value.y);
    // }
}
