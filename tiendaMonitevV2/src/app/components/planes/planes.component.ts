import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalDismissReasons, NgbAccordionConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Planes } from 'app/models/planes';
import { PlanService } from 'app/services/plan.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  planesList = [];
  plan:Planes;
  closeResult = '';
  mostrarFooter = false;

  constructor( private planService: PlanService,
               config: NgbAccordionConfig,
               private rutaActiva: ActivatedRoute,
               private router: Router) { 

    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit(): void {
    this.getAllPlanes();
    if(this.rutaActiva.snapshot.params.true != undefined) {
      this.mostrarFooter = this.rutaActiva.snapshot.params.true;
    }
  }

  getAllPlanes(){
    this.planService.getAll().subscribe(
        (res: any) => {
          this.planesList = res;
        },
        (err) => { 
          console.log('Error', 'Unexpected error', 'error');
        },
        () => {}
      );
  }
  open(planSeleccionado:Planes) {
      this.plan = planSeleccionado;
      this.plan.precioTotal = (this.plan.precio * this.plan.num_dispositivos_conectados)*12;
      const plan: NavigationExtras = {state: {plan: this.plan}};
      this.router.navigate(['/pagos/orden-pago/:true'], plan);
    }
}
