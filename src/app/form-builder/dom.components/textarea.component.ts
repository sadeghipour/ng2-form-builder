import { Component } from '@angular/core';
import { TextAreaModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector:"FormBuilderTextArea",
    templateUrl: 'textarea.template.html'
})
export class TextAreaComponent {

    public myForm:FormGroup;
    public textArea:TextAreaModel;
    private _jsonObj:any;
    constructor() {

    }

    get jsonObj(): any {
        return this._jsonObj;
    }

    set jsonObj(value: any) {
        this._jsonObj = value;
        this.textArea = new TextAreaModel(this._jsonObj);
    }
}