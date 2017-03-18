import { Component } from '@angular/core';
import {TextBoxModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector:"FormBuilderTextBox",
    templateUrl: 'textbox.template.html'
})
export class TextBoxComponent {

    public myForm:FormGroup;
    public textBox:TextBoxModel;
    private _jsonObj:any;
    constructor() {

    }

    get jsonObj(): any {
        return this._jsonObj;
    }

    set jsonObj(value: any) {
        this._jsonObj = value;
        this.textBox = new TextBoxModel(this._jsonObj);
    }
}