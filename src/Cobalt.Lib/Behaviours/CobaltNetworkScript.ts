import { DataDTO } from "../Models/DataDTO";
import { InterComUserDTO } from "../Models/InterComUserDTO";
import { CobaltDescriptor } from "./CobaltDescriptor";
import { CobaltScript } from "./CobaltScript";

/**
 * Base class for defining class behavior within a world.
 * 
 */
export abstract class CobaltNetworkScript extends CobaltScript {
    /**
     * Creates a new instance of CobaltScript.
     * @param id - The identifier for the script.
     */
    constructor(id: string) {
        super(id);
    }

    public Send(message: string): void{}
    public SendTo(message: string, userId: string): void{}

    public SendGlobally(message: string): void{}
    public SendGloballyTo(message: string, userId: string): void{}
    
    public abstract OnGlobalMessageReceived(data: string): void;
    public abstract OnObjectMessageReceived(data: string): void;
    public abstract OnLeftRoom(interComUserDTO: InterComUserDTO): void;
    public abstract OnJoinedRoom(interComUserDTO: InterComUserDTO): void;
    public abstract OnMasterChanged(interComUserDTO: InterComUserDTO): void;

    public InvokeOnGlobalMessageReceived(id: string, data: string): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltNetworkScript;
        instance.OnGlobalMessageReceived(data);
    }

    public InvokeOnObjectMessageReceived(id: string, data: string): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltNetworkScript;
        instance.OnObjectMessageReceived(data);
    }

    public InvokeOnLeftRoom(id: string, interComUserDTO: InterComUserDTO): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltNetworkScript;
        instance.OnLeftRoom(interComUserDTO);
    }

    public InvokeOnJoinedRoom(id: string, interComUserDTO: InterComUserDTO): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltNetworkScript;
        instance.OnJoinedRoom(interComUserDTO);
    }

    public InvokeOnMasterChanged(id: string, interComUserDTO: InterComUserDTO): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltNetworkScript;
        instance.OnMasterChanged(interComUserDTO);
    }
}
