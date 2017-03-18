export class DomModel {

    //declare properties
    public title:string = undefined;
    public type:string = undefined;
    public isRequired:boolean = undefined;
    public isActive:boolean=true;
    public description:string = undefined;
    public controllerName:string = undefined;

    //fill data
    constructor(data:any){
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val) || this.hasOwnProperty('_'+val)){
                this[val] = data[val];
            }
        });
    }
}

export class TextBoxModel extends DomModel{
    //declare properties
    public textType:string = undefined;
    public maxLength:number = undefined;
    public minLength:number = undefined;

   //fill data
    constructor(data:any){
        super(data);
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val) || this.hasOwnProperty('_'+val)){
                this[val] = data[val];
            }
        });
    }

}


export class TextAreaModel extends DomModel{
    //declare properties
    public maxLength:number = undefined;
    public minLength:number = undefined;

   //fill data
    constructor(data:any){
        super(data);
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val) || this.hasOwnProperty('_'+val)){
                this[val] = data[val];
            }
        });
    }

}

export class RadioModel extends DomModel{
    //declare properties
    public options:Array<Options> = undefined;

   //fill data
    constructor(data:any){
        super(data);
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val)){
                this[val] = data[val];
            }
        });
    }
}

export class CheckBoxModel extends DomModel{
    //declare properties
    public options:Array<Options> = undefined;

   //fill data
    constructor(data:any){
        super(data);
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val)){
                this[val] = data[val];
            }
        });
    }
}
export class SelectBoxModel extends DomModel{
    //declare properties
    public options:Array<Options> = undefined;

   //fill data
    constructor(data:any){
        super(data);
        let arr = Object.keys(data);
        arr.forEach((val,index)=>{
            if(this.hasOwnProperty(val) || this.hasOwnProperty('_'+val)){
                this[val] = data[val];
            }
        });
    }
}

export class Options {
    public key:string = undefined;
    public value:string = undefined;
    public selected:boolean = undefined;
}
