
import { Collider } from "../Unity/Collider";
import { Debug } from "../Utilities/Debug";
import { CobaltDescriptor } from "./CobaltDescriptor";
import { CobaltScript } from "./CobaltScript";

/**
 * Base class for defining class behavior within a world.
 * 
 */
export abstract class CobaltCollisionScript extends CobaltScript {
    /**
     * Creates a new instance of CobaltScript.
     * @param id - The identifier for the script.
     */
    constructor(id: string) {
        super(id);
    }

    public abstract OnTriggerEnter(collision : Collider): void;
    public abstract OnTriggerStay(collision : Collider): void;
    public abstract OnTriggerExit(collision : Collider): void;


    public InvokeOnTriggerEnter(id: string, collider: Collider): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltCollisionScript;
        instance.OnTriggerEnter(collider);
    }
    
    public InvokeOnTriggerStay(id: string, collider: Collider): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltCollisionScript;
        instance.OnTriggerStay(collider);
    }
    
    public InvokeOnTriggerExit(id: string, collider: Collider): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltCollisionScript;
        instance.OnTriggerExit(collider);
    }
}
