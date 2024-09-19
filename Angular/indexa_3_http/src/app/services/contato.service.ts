import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contato } from '../componentes/contato/contato';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API_URL = "http://localhost:3000/contatos"
  
  constructor(private http: HttpClient) {

  }

  obterContatos(): Observable<Contato[]>{
    return this.http.get<Contato[]>(this.API_URL);
  }

  salvarContato(contato: Contato){
    return this.http.post<Contato>(this.API_URL, contato);
  }

}
