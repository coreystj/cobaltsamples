import { AudioClip } from "../Unity/AudioClip";
import { Component } from "../Components/Component";
import { Color } from "../Math/Color";
import { Transposer } from "../Math/Transposer";
import { CobaltDescriptor } from "./CobaltDescriptor";


/**
 * Base class for defining class behavior within a world.
 * 
 */
export abstract class CobaltScript {
    public Id: string;
    public transform: Transposer;

    /**
     * Creates a new instance of CobaltScript.
     * @param id - The identifier for the script.
     */
    constructor(id: string) {
        this.Id = id;
        this.transform = new Transposer();
    }

    /**
     * Executes the Start method of the specified script instance.
     * @param id - The ID of the script instance.
     */
    public OnStart(id: string): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltScript;
        instance.Start();
    }

    /**
     * Executes the Update method of the specified script instance.
     * @param id - The ID of the script instance.
     */
    public OnUpdate(id: string): void {
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltScript;
        instance.Update();
    }

    public OnExecuteMethod(id: string, methodName: string) : void{
        const instance = ((this as any).CobaltInstance as CobaltDescriptor).GetById(id) as CobaltScript;
        eval("instance." + methodName + "();");
    }

    /**
     * Abstract method to be implemented by derived classes for initialization.
     */
    public abstract Start(): void;

    /**
     * Abstract method to be implemented by derived classes for update logic.
     */
    public abstract Update(): void;


    public GetReferenceLength(): number { throw new Error("Not implemented"); }

    public GetNumber(index: number, path: string): number { throw new Error("Not implemented"); }
    public SetNumber(value: number, index: number, path: string): void { throw new Error("Not implemented"); }

    public GetColor(index: number, path: string): Color { throw new Error("Not implemented"); }
    public SetColor(value: Color, index: number, path: string): void { throw new Error("Not implemented"); }

    public GetString(index: number, path: string): string { throw new Error("Not implemented"); }
    public SetString(value: string, index: number, path: string): void { throw new Error("Not implemented"); }

    public GetBoolean(index: number, path: string): boolean { throw new Error("Not implemented"); }
    public SetBoolean(value: boolean, index: number, path: string): void { throw new Error("Not implemented"); }

    public GetReference(index: number, path: string): any { throw new Error("Not implemented"); }
    public SetReference(value: any, index: number, path: string): void { throw new Error("Not implemented"); }

    public GetScript<T extends CobaltScript>(index: number): T { throw new Error("Not implemented"); }

    public ExecuteDelayed(time: number, action : ()=>void) : void{
        throw new Error("Not implemented");
    }

    public GetWWW(url: string, onSuccess : (content: string)=>void, onFailed : (exception: string)=>void) : void{
        throw new Error("Not implemented");
    }

    public GetAudioWWW(url: string, onSuccess : (content: AudioClip)=>void, onFailed : (exception: string)=>void) : void{
        throw new Error("Not implemented");
    }

    public GetImageWWW(url: string, onSuccess : (content: any)=>void, onFailed : (exception: string)=>void) : void{
        throw new Error("Not implemented");
    }

    public PostWWW(url: string, body: string, onSuccess : (content: string)=>void, onFailed : (exception: string)=>void) : void{
        throw new Error("Not implemented");
    }

    public GetWrapperComponent<T extends Component>(constructor: new (data: CobaltScript, index: number) => T, index: number): T { 
        return new constructor(this, index);
    }

    public GetComponent<T>(index: number): T { 
        var reference: any = this.GetReference(index, "this");
        return reference as T;
    }

    public ExecuteMethod(reference: any, methodName: string) : void{
        throw new Error("Not implemented");
    }

    /**
     * Returns a string representation of the CobaltScript instance.
     * @returns A string representing the CobaltScript instance.
     */
    public toString(): string {
        return `{ Id: '${this.Id}', transform: ${this.transform.toString()} }`;
    }
}
