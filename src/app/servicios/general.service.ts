import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private url = 'http://localhost:4200/';

  constructor(private http: HttpClient) { }

  // Resumen INSERTAR

  agregarResumen(resumen: any): Observable<any> {
    return this.http.post(`${this.url}aggresume`, resumen);    
  }

  mostrarresumen() {
    return this.http.get(`${this.url}getAllresume`);
  }
}
