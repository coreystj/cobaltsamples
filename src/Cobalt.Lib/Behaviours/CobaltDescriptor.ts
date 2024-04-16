import { Debug } from "../Utilities/Debug";
import { CobaltScript } from "./CobaltScript";

/**
 * Manages instances of CobaltScript and provides methods for adding, removing, and retrieving scripts.
 * 
 * Example Usage:
 * ```ts
 * const cobaltDescriptor = new CobaltDescriptor();
 * const cobaltScript = new CobaltScript();
 * cobaltDescriptor.Add(cobaltScript);
 * console.log(cobaltDescriptor.toString()); // Output: CobaltDescriptor { scriptInstances: { 'scriptId': [CobaltScript] } }
 * ```
 */
export class CobaltDescriptor {
    private _scriptInstances: { [key: string]: CobaltScript };

    /**
     * Creates a new CobaltDescriptor instance.
     */
    constructor() {
        this._scriptInstances = {};
    }

    /**
     * Adds a CobaltScript instance to the descriptor.
     * @param cobaltScript - The CobaltScript instance to be added.
     */
    public Add(cobaltScript: CobaltScript): void {
        // Adding a script to the dictionary with its name as the key
        this._scriptInstances[cobaltScript.Id] = cobaltScript;
        // Debug.Log("Added " + cobaltScript.Id);
    }

    /**
     * Removes a CobaltScript instance from the descriptor.
     * @param cobaltScript - The CobaltScript instance to be removed.
     */
    public Remove(cobaltScript: CobaltScript): void {
        // Removing a script by its name
        delete this._scriptInstances[cobaltScript.Id];
    }

    /**
     * Removes a CobaltScript instance from the descriptor by its ID.
     * @param cobaltScriptId - The ID of the CobaltScript instance to be removed.
     */
    public RemoveById(cobaltScriptId: string): void {
        // Removing a script by its ID
        delete this._scriptInstances[cobaltScriptId];
    }

    /**
     * Gets a CobaltScript instance from the descriptor by its ID.
     * @param cobaltScriptId - The ID of the CobaltScript instance to be retrieved.
     * @returns The CobaltScript instance with the specified ID.
     */
    public GetById(cobaltScriptId: string): CobaltScript {
        // Getting a script by its ID
        return this._scriptInstances[cobaltScriptId];
    }

    /**
     * Returns a string representation of the CobaltDescriptor instance.
     * @returns A string representing the CobaltDescriptor instance.
     */
    public toString(): string {
        return `CobaltDescriptor { scriptInstances: ${JSON.stringify(this._scriptInstances)} }`;
    }
}
