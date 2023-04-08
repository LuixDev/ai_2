import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  ngOnInit() {}


  mensaje: string = '';
  

  constructor(private http: HttpClient) {}
  
 

  async mensa() {
    const credentials = {
      mensaje: this.mensaje,
      
    };

    
    this.http.post('http://127.0.0.1:3000/chatbot', credentials).subscribe(
      (response: any) => {
        
          alert(response);
         
        
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
        alert('Error en la solicitud HTTP');
      }
    );
  }
}
