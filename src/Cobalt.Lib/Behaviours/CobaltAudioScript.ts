import { Vector3 } from "../Math/Vector3";
import { CobaltScript } from "./CobaltScript";

/**
 * Base class for defining class behavior within a world.
 * 
 */
export abstract class CobaltAudioScript extends CobaltScript {
    /**
     * Creates a new instance of CobaltScript.
     * @param id - The identifier for the script.
     */
    constructor(id: string) {
        super(id);
    }

    public Play(index: number): void{}
    public PlayAtPosition(index: number, position: Vector3): void{}

    public PlaySong(index: number): void{}
}
