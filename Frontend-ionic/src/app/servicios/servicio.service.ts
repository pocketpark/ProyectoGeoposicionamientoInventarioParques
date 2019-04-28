import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  constructor(public _http: HttpClient) { }

  private httpUrlAmbientes = 'http://localhost:3000/api/ambientes';
  private httpUrlEscalas = 'http://localhost:3000/api/escalas';
  private httpUrlParques ='http://localhost:3000/api/parques';

  getAmbientes(): Observable<any> {
    return this._http.get(this.httpUrlAmbientes);
  }
  getEscalas(): Observable<any> {
    return this._http.get(this.httpUrlEscalas);
  }
  getParque(): Observable<any> {
    return this._http.get(this.httpUrlParques);
  }
  // postFormulario(nombrecompleto, email, celular, edad): Observable<any> {
  //   let data="name="+nombrecompleto+"&email="+email+"&celular="+celular+"&edad="+edad;
  //   console.log(data);
  //   //return this._http.post(this.httpUrl2,data,{responseType: 'text'});
  // }
}
