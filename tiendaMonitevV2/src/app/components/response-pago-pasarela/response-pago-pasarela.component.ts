import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpaycoTransaction } from 'app/models/epayca-transaction';
import { PlanService } from 'app/services/plan.service';

@Component({
  selector: 'app-response-pago-pasarela',
  templateUrl: './response-pago-pasarela.component.html',
  styleUrls: ['./response-pago-pasarela.component.css']
})
export class ResponsePagoPasarelaComponent implements OnInit {

  refPayco: string = ''
  token:string = ''
	transactionResponse:any ;
  transactionResponseDetail:EpaycoTransaction;
  userRequest:any

  constructor(private epaycoService: PlanService,
              private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.refPayco= params['ref_payco'] || params['x_ref_payco'];
    });
    if(this.refPayco != undefined){
      this.epaycoService.getTransactionResponse(this.refPayco)
     .subscribe((data: EpaycoTransaction) =>{
         this.transactionResponse = data.data
         this.autenticarse(data.data.x_ref_payco);
     });
    }
    this.epaycoService.getUserRequest().subscribe(
        (res: any) => {
          this.userRequest = res;
          console.log(this.userRequest);
        },
        (err) => { 
          console.log('Error', 'Unexpected error', 'error');
        },
        () => {}
      );  
}
autenticarse(x_ref_payco: any) {
  this.epaycoService.getTokenEpayco('monitoreomonitev@gmail.com','Aplus9843#')
  .subscribe((data: any) =>{
      this.consultarDetalleTransaction(x_ref_payco,data.body.token);
    });
    
  }
consultarDetalleTransaction(referencePayco:number,token:any) {
  debugger
  this.epaycoService.getTransactionDetatilResponse(referencePayco,token)
  .subscribe((response: any) =>{
    this.transactionResponseDetail = response.body.data
    console.log(this.transactionResponseDetail);
  });
}
}
