import {
    Component, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit,
    EventEmitter
} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {TextBoxComponent} from "./dom.components/textbox.component";
import {TextBoxModel} from "./Models/dom.model";
import {TextAreaComponent} from "./dom.components/textarea.component";
import {RadioComponent} from "./dom.components/radio.component";
import {SelectComponent} from "./dom.components/select.component";
import {CheckBoxComponent} from "./dom.components/checkbox.component";
import {UploadComponent} from "./dom.components/upload.component";

@Component({
    selector:"[form-builder]",
    templateUrl: 'form-builder.template.html'
})
export class FormBuilderComponent implements OnInit{
    public myForm:FormGroup;
    public formData:any;
    public applicationAnswers:any = {};
    public answerEmitter:EventEmitter<any> = new EventEmitter<any>();

    @ViewChild("applicationForm",{read:ViewContainerRef}) applicationForm;

    //get json data to create form
    @Input() set formDataInput(value:any){
        this.formData = value;
        this.generateForm();
    }
    constructor(public componentFactoryResolver:ComponentFactoryResolver) {
        this.myForm = new FormGroup({});
    }


    ngOnInit(): void {

    }

    generateForm(){
        this.formData.items.forEach((val:any,inx)=>{
            let cmpComFac;
            let cmpRef;
            if(val.isRequired==true){
                let controllerName = this.getGuid();
                this.myForm.addControl(controllerName,new FormControl(null, [<any>Validators.required,<any>Validators.minLength(val.minLength || 1),<any>Validators.maxLength(val.maxLength?val.maxLength:0),val.isRequired?Validators.required:null]));
                val["controllerName"] = controllerName;
            }


            if(val.type=="text"){
               cmpComFac = this.componentFactoryResolver.resolveComponentFactory(TextBoxComponent);
            }

            else if(val.type=="textarea"){
                cmpComFac = this.componentFactoryResolver.resolveComponentFactory(TextAreaComponent);
            }

            else if(val.type=="checkbox"){
                cmpComFac = this.componentFactoryResolver.resolveComponentFactory(CheckBoxComponent);
            }


            else if(val.type=="radio"){
                cmpComFac = this.componentFactoryResolver.resolveComponentFactory(RadioComponent);
            }


            else if(val.type=="upload"){
                cmpComFac = this.componentFactoryResolver.resolveComponentFactory(UploadComponent);
            }


            else if(val.type=="select"){
                cmpComFac = this.componentFactoryResolver.resolveComponentFactory(SelectComponent);
            }


            cmpRef = this.applicationForm.createComponent(cmpComFac);
            cmpRef.instance.myForm = this.myForm;
            cmpRef.instance.jsonObj = val;
            //set empty array answer
            this.applicationAnswers[val.title] = [];

            //listen to changes in component
            if(cmpRef.instance.answersEmitter){
                let answerEmitter = cmpRef.instance.answersEmitter;
                answerEmitter.subscribe((params:any)=>{
                    this.applicationAnswers[val.title] = params;
                    console.log(this.applicationAnswers);
                });

            }




        });
    }

    getGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

}