import {Component, EventEmitter} from '@angular/core';
import {RadioModel, CheckBoxModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";

@Component({
    selector:"FormBuilderCheckBox",
    templateUrl: 'checkbox.template.html'
})
export class CheckBoxComponent {

    public myForm:FormGroup;
    public checkBoxModel:CheckBoxModel;
    private _jsonObj:any;
    public answersEmitter:EventEmitter<any> = new EventEmitter<any>();
    public answers:Array<any>=[];
    constructor() {

    }

    get jsonObj(): any {
        return this._jsonObj;
    }

    set jsonObj(value: any) {
        this._jsonObj = value;
        this.checkBoxModel = new CheckBoxModel(this._jsonObj);
    }

    onChange(item:any){
        if(item.selected==true){
            this.answers.push(item);
        }
        else {
            if(this.answers.length>0){
                this.answers.splice(this.answers.indexOf(item),1);
            }
        }
        this.answersEmitter.emit(this.answers);
    }


}