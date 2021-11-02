import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  _url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  constructor(private http: HttpClient) {
    //recibe un http
    console.log('Servicio Persona Inyectado correctamente');
  }

  // metodo para traer desde el API rest
  getPersona() {
    let header = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this._url, { headers: header });
  }
}
