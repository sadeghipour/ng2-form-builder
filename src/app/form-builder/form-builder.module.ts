import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextBoxComponent} from "./dom.components/textbox.component";
import {FormBuilderComponent} from "./form-builder.component";
import {TextAreaComponent} from "./dom.components/textarea.component";
import {RadioComponent} from "./dom.components/radio.component";
import {SelectComponent} from "./dom.components/select.component";
import {CheckBoxComponent} from "./dom.components/checkbox.component";
import {UploadComponent} from "./dom.components/upload.component";


@NgModule({
    imports: [CommonModule,RouterModule,FormsModule,ReactiveFormsModule],
    exports: [FormBuilderComponent],
    declarations: [FormBuilderComponent,TextBoxComponent,TextAreaComponent,RadioComponent,SelectComponent,CheckBoxComponent,UploadComponent],
    providers: [],
    entryComponents:[TextBoxComponent,TextAreaComponent,RadioComponent,SelectComponent,CheckBoxComponent,UploadComponent]
})
export class FormBuilderModule { }
