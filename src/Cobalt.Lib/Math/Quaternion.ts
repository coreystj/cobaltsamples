/**
 * Represents a quaternion with x, y, z, and w components.
 * 
 * Example Usage:
 * ```ts
 * const quaternion = new Quaternion(1, 2, 3, 4);
 * Debug.Log(quaternion.toString()); // Output: Quaternion { x: 1, y: 2, z: 3, w: 4 }
 * ```
 */
export class Quaternion {
    public x: number;
    public y: number;
    public z: number;
    public w: number;

    /**
     * Creates a new Quaternion with the specified x, y, z, and w components.
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     * @param w - The w component.
     */
    constructor(x: number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    /**
     * Returns a string representation of the quaternion.
     * @returns A string representing the quaternion.
     */
    public toString(): string {
        return `Quaternion { x: ${this.x}, y: ${this.y}, z: ${this.z}, w: ${this.w} }`;
    }
}
