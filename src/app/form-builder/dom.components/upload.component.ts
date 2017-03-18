import { Component } from '@angular/core';
import {TextBoxModel} from "../Models/dom.model";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
    selector:"FormBuilderUpload",
    templateUrl: 'upload.template.html'
})
export class UploadComponent {

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

    uploadFile(url:string,file:any){
        this.makeFileRequest(file,url);
    }

    public makeFileRequest(files:File[],url):Observable<any> {
        return Observable.create(observer => {
            let formData:FormData = new FormData(),
                xhr:XMLHttpRequest = new XMLHttpRequest();
            for (let i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    } else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}