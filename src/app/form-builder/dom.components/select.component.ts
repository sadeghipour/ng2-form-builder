import {Component} from '@angular/core';
import {RadioModel, SelectBoxModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector:"FormBuilderSelectBox",
    templateUrl: 'select.template.html'
})
export class SelectComponent {

    public myForm:FormGroup;
    public selectBoxModel:SelectBoxModel;
    private _jsonObj:any;
    constructor() {

    }

    get jsonObj(): any {
        return this._jsonObj;
    }

    set jsonObj(value: any) {
        this._jsonObj = value;
        this.selectBoxModel = new RadioModel(this._jsonObj);
    }
}