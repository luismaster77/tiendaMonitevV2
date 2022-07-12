import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planes } from 'app/models/planes';

@Component({
  selector: 'app-orden-pago-plan',
  templateUrl: './orden-pago-plan.component.html',
  styleUrls: ['./orden-pago-plan.component.css']
})
export class OrdenPagoPlanComponent implements OnInit {

  data:any;
  mostrarFooter = false;

  constructor(private rutaActiva: ActivatedRoute,
              private router: Router) { 
    
    const navigation = this.router.getCurrentNavigation();
    let plan = navigation.extras.state as {plan: any};
    this.data = plan;
  }

  ngOnInit(): void {
    if(this.rutaActiva.snapshot.params.true != undefined) {
      this.mostrarFooter = this.rutaActiva.snapshot.params.true;
    }
  }

}
