import {Component, EventEmitter} from '@angular/core';
import {RadioModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector:"FormBuilderRadio",
    templateUrl: 'radio.template.html'
})
export class RadioComponent {

    public myForm:FormGroup;
    public radioModel:RadioModel;
    public _jsonObj:any;
    public answersEmitter:EventEmitter<any> = new EventEmitter<any>();
    constructor() {

    }

    get jsonObj(): any {
        return this._jsonObj;
    }

    set jsonObj(value: any) {
        this._jsonObj = value;
        this.radioModel = new RadioModel(this._jsonObj);
    }

    onChange(item){
        item.selected = true;
        this.answersEmitter.emit([item]);
    }
}