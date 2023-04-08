import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sentimientosyemociones',
  templateUrl: './sentimientosyemociones.component.html',
  styleUrls: ['./sentimientosyemociones.component.css']
})
export class SentimientosyemocionesComponent implements OnInit {
  ngOnInit() {}
  texto: Object = '';

  constructor(private http: HttpClient) {}

  async text() {
    const credentials = {
      texto: this.texto,
    };
    this.http.post('http://127.0.0.1:3000/texto', credentials).subscribe(
      (response: any) => {
        
          alert(JSON.stringify(response));
        
       
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
        alert('Error al enviar la solicitud al servidor. Verifica tu conexión a internet y vuelve a intentar.');
      }
    );
  }
}
