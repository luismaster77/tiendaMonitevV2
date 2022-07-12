import { Component, OnInit, OnDestroy} from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Planes } from 'app/models/planes';



@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy{
    data : Date = new Date();

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    dispositivos;
    mensajes;
    clientes;
    visitas;

    planesList = [];
    aplicarAnimate = false;

    date: {year: number, month: number};
    model: NgbDateStruct;
    plan:Planes;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;
    closeResult = '';
    myScriptElement: any;
    trustedUrl:any;

    constructor() { }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
      //var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        setInterval(() => {    
            let date = new Date();
            let year = date.getFullYear();
            let day = date.getDay();
            let hour = date.getHours();
            let minute = date.getMinutes();
    
            this.dispositivos   =  Math.floor((10+day)*(hour*minute));
            this.clientes       =  Math.floor((33+day)+(hour*minute));
            this.mensajes       =  Math.floor(this.dispositivos+year+day+hour+minute);
            this.visitas        =  Math.floor((100+day)+(hour*minute));
            this.aplicarAnimate =  true;
        },10000);
        this.aplicarAnimate=false;
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
