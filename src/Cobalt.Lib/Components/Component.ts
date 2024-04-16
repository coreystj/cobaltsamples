import { CobaltScript } from "../Behaviours/CobaltScript";

export abstract class Component {
    protected _parent: CobaltScript;
    protected _index: number;
    
    public constructor(cobaltScript: CobaltScript, index: number){
        this._parent = cobaltScript;
        this._index = index;
    }
}