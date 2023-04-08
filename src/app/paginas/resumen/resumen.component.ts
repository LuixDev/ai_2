import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  ngOnInit() {}
  link: string = '';
  min: number = 0; // Modificar aquí

  constructor(private http: HttpClient) {}

 

  async resu() {
    const credentials = {
      link: this.link,
      min: this.min,
    };

    
    this.http.post('http://127.0.0.1:3000/resumen', credentials).subscribe(
      (response: any) => {
        alert('resumen: ' + response);
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
        alert('Error en la solicitud HTTP');
      }
    );
  }
}
