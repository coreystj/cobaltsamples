import { AudioClip } from "./AudioClip";
import { Component } from "../Components/Component";

export class AudioSource extends Component {
    public clip : AudioClip;
    public time: number;
    public mute: boolean;

    public Play(){ throw new Error("Not implemented"); }

    public Pause(){ throw new Error("Not implemented"); }

    public Stop(){ throw new Error("Not implemented"); }
}

