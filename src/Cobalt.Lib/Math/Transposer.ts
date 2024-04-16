import { Vector3 } from "./Vector3";
import { Quaternion } from "./Quaternion";

/**
 * Represents a 3D transformation with position and rotation properties.
 * 
 * Example Usage:
 * ```ts
 * const position = transform.GetPosition();
 * position.x = 3;
 * transform.SetPosition(position);
 * Debug.Log(transform.GetPosition().toString()); // Output: Vector3 { x: 3, y: 0, z: 0 }
 * ```
 */
export class Transposer {
    /**
     * Gets the parent identifier of the transform.
     * @returns The parent identifier as a string.
     */
    public GetParentId(): string {
        throw new Error("Not implemented");
    }

    /**
     * Sets the parent identifier of the transform.
     * @param parent - The new parent identifier.
     */
    public SetParentId(parent: string): void {
        throw new Error("Not implemented");
    }

    /**
     * Gets the world position of the transform.
     * @returns A Vector3 representing the world position.
     */
    public GetPosition(): Vector3 {
        throw new Error("Not implemented");
    }

    /**
     * Gets the local position of the transform.
     * @returns A Vector3 representing the local position.
     */
    public GetLocalPosition(): Vector3 {
        throw new Error("Not implemented");
    }

    /**
     * Sets the world position of the transform.
     * @param position - The new world position.
     */
    public SetPosition(position: Vector3): void {
        throw new Error("Not implemented");
    }

    /**
     * Sets the local position of the transform.
     * @param position - The new local position.
     */
    public SetLocalPosition(position: Vector3): void {
        throw new Error("Not implemented");
    }

    /**
     * Gets the world rotation of the transform.
     * @returns A Quaternion representing the world rotation.
     */
    public GetRotation(): Quaternion {
        throw new Error("Not implemented");
    }

    /**
     * Gets the local rotation of the transform.
     * @returns A Quaternion representing the local rotation.
     */
    public GetLocalRotation(): Quaternion {
        throw new Error("Not implemented");
    }

    /**
     * Sets the world rotation of the transform.
     * @param rotation - The new world rotation.
     */
    public SetRotation(rotation: Quaternion): void {
        throw new Error("Not implemented");
    }

    /**
     * Sets the local rotation of the transform.
     * @param rotation - The new local rotation.
     */
    public SetLocalRotation(rotation: Quaternion): void {
        throw new Error("Not implemented");
    }
}
