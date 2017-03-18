import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'home.template.html'
})
export class HomeComponent implements OnInit {

    public jsonData = {
        items:[{
            type:"text",
            textType:"text",
            title:"test txt",
            description:"desc 1",
            isRequired:true,
        },
            {
                type:"text",
                textType:"email",
                title:"password",
                description:"desc 2",
                isRequired:true,
            },

            {
                type:"textarea",
                title:"textAREA",
                description:"desc 2",
                isRequired:true,
                maxLength:700,
            },

            {
                type:"radio",
                title:"radio",
                description:"desc 2",
                isRequired:true,
                options:[{key:"1",value:"ALİ",selected:false},{key:"2",value:"ALİ2",selected:true},{key:"3",value:"ALİ3",selected:false}]
            },

            {
                type:"select",
                title:"select",
                description:"desc 2",
                isRequired:true,
                options:[{key:"1",value:"ALİ"},{key:"2",value:"ALİ2"},{key:"3",value:"ALİ3"}]
            },

            {
                type:"checkbox",
                title:"checkbox",
                description:"checkbox desc",
                isRequired:true,
                options:[{key:"1",value:"ALİ",selected:true},{key:"2",value:"ALİ2",selected:false},{key:"3",value:"ALİ3",selected:false}]
            },

            {
                type:"upload",
                title:"upload file",
                description:"upload file desc",
                isRequired:true,
            }
        ]
    };
    constructor() {

    }

    ngOnInit() { }

}