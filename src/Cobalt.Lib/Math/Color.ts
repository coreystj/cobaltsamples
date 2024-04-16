/**
 * Represents a color with r, g, b, and a components.
 * 
 * Example Usage:
 * ```ts
 * const color = new Color(1, 2, 3, 4);
 * Debug.Log(color.toString()); // Output: Color { r: 1, g: 2, b: 3, a: 4 }
 * ```
 */
export class Color {
    public r: number;
    public g: number;
    public b: number;
    public a: number;

    /**
     * Creates a new Color with the specified r, g, b, and a components.
     * @param r - The r component.
     * @param g - The g component.
     * @param b - The b component.
     * @param a - The a component.
     */
    constructor(r: number, g: number, b: number, a: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * Returns a string representation of the color.
     * @returns A string representing the color.
     */
    public toString(): string {
        return `Color { x: ${this.r}, y: ${this.g}, z: ${this.b}, w: ${this.a} }`;
    }
}
