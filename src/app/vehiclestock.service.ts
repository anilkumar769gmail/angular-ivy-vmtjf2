import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class VehicleStockService{

  constructor(private http: HttpClient){}

  getVehicleStocks():Observable<any>{
    const data = this.http.get('https://parallelum.com.br/fipe/api/v1/carros/marcas');
    return data;
  }
}