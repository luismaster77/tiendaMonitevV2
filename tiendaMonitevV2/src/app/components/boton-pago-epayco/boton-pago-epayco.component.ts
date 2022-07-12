import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Planes } from 'app/models/planes';

@Component({
  selector: 'app-boton-pago-epayco',
  templateUrl: './boton-pago-epayco.component.html',
  styleUrls: ['./boton-pago-epayco.component.css']
})

export class BotonPagoEpaycoComponent implements OnInit {

@Input() value: Planes;

  constructor(public renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    let elemento = this.document.getElementById('script_boton');
    let script = this.renderer.createElement('script');
    script.src = 'https://checkout.epayco.co/checkout.js';
    script.setAttribute('data-epayco-key','d81725213edb808ba5cefe3625fd6ec1');
    script.setAttribute('data-epayco-private-key','dd407c273165dc3b46e0569c30ab8028');
    script.setAttribute('class','epayco-button');
    script.setAttribute('data-epayco-amount','70.52');
    script.setAttribute('data-epayco-tax','2.516');
    script.setAttribute('data-epayco-tax-base','68');
    script.setAttribute('data-epayco-name','Plan básico');
    script.setAttribute('data-epayco-description','Plan básico');
    script.setAttribute('data-epayco-currency','usd');
    script.setAttribute('data-epayco-country','co');
    script.setAttribute('data-epayco-test','false');
    script.setAttribute('data-epayco-external','false');
    script.setAttribute('data-epayco-response','http://localhost:4200/response/pasarela');
    script.setAttribute('data-epayco-confirmation','');
    script.setAttribute('data-epayco-button','https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn6.png');
    this.renderer.appendChild(elemento, script);
  }

}
