/**
 * Represents a 3D vector with x, y, and z components.
 * 
 * Example Usage:
 * ```ts
 * const vector = new Vector3(1, 2, 3);
 * Debug.Log(vector.toString()); // Output: Vector3 { x: 1, y: 2, z: 3 }
 * ```
 */
export class Vector3 {
    public static zero = new Vector3(0,0,0);

    public static up = new Vector3(0,1,0);
    public static down = new Vector3(0,-1,0);

    public static forward = new Vector3(0,0,1);
    public static back = new Vector3(0,0,-1);
    
    public static left = new Vector3(-1,0,0);
    public static right = new Vector3(1,0,0);

    public x: number;
    public y: number;
    public z: number;

    /**
     * Creates a new Vector3 with the specified x, y, and z components.
     * @param x - The x component.
     * @param y - The y component.
     * @param z - The z component.
     */
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public static Minus(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
                v1.x - v2.x,
                v1.y - v2.y,
                v1.z - v2.z,
            );
    }

    public static Add(v1: Vector3, v2: Vector3): Vector3 {
        return new Vector3(
                v1.x + v2.x,
                v1.y + v2.y,
                v1.z + v2.z,
            );
    }

    public static Multiply(v1: Vector3, amount: number): Vector3 {
        return new Vector3(
                v1.x * amount,
                v1.y * amount,
                v1.z * amount,
            );
    }

    public static Divide(v1: Vector3, amount: number): Vector3 {
        return new Vector3(
                v1.x / amount,
                v1.y / amount,
                v1.z / amount,
            );
    }

    /**
     * Returns a string representation of the vector.
     * @returns A string representing the vector.
     */
    public toString(): string {
        return `Vector3 { x: ${this.x}, y: ${this.y}, z: ${this.z} }`;
    }
}
