import { NgModule } from '@angular/core';

import { HomeComponent} from './home.component';
import {FormBuilderModule} from "../form-builder/form-builder.module";
import {HomeRouterModule} from "./home.route";

@NgModule({
    imports: [FormBuilderModule, HomeRouterModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule {
}
