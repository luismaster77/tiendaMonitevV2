import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { EpaycoTransaction } from 'app/models/epayca-transaction';
import { Planes } from 'app/models/planes';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) {}
  getAll(): Observable<Planes>{
    //let params = new HttpParams();

    const url = environment.api_url_base + environment.api_url_findAllPlanes;
    const res = this.http.get(url);
    return res;
  }
  getUserRequest(): Observable<any>{
    return this.http.post(environment.api_url_base + environment.api_url_findUserRequest,null);
  }
  getTransactionResponse(refPayco: string) {
	  return this.http.get<EpaycoTransaction>(environment.api_url_epayco+refPayco);
	}

  getTokenEpayco(username:string,password:string): Observable<any>{
  const options = {
    headers :{
      "Authorization":"Basic "+btoa(username+":"+password),
      "Content-Type":"application/json"},
      observe: 'response' as 'body'
  }
    //post data missing(here you pass email and password)
  let data= {
    "username":username,
    "password":password
    }
    /* const requestOptions = { headers: headers }; */
    return this.http.post<any>(environment.api_url_auth_token_epayco,data,options);
  }

  getTransactionDetatilResponse(referencePayco: any,auth_token:any){
    debugger
    const options = {
      headers :{
        "Authorization":"Bearer "+auth_token,
        "Content-Type":"application/json"},
        observe: 'response' as 'body'
    }
    
    let data = {"filter":{"referencePayco":referencePayco}}
    let body = JSON.stringify(data);

    return this.http.post<any>(environment.api_url_response_detail_epayco,body,options);
  }
}
