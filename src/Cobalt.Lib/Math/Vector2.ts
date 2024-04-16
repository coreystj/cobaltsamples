/**
 * Represents a 2D vector with x, and y components.
 * 
 * Example Usage:
 * ```ts
 * const vector = new Vector2(1, 2);
 * Debug.Log(vector.toString()); // Output: Vector3 { x: 1, y: 2 }
 * ```
 */
export class Vector2 {
    public x: number;
    public y: number;

    /**
     * Creates a new Vector2 with the specified x, and y components.
     * @param x - The x component.
     * @param y - The y component.
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Returns a string representation of the vector.
     * @returns A string representing the vector.
     */
    public toString(): string {
        return `Vector2 { x: ${this.x}, y: ${this.y} }`;
    }
}
