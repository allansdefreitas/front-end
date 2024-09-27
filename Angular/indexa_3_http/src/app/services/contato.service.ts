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

  buscarPorId(id: number): Observable<Contato>{
    const templateStringUrl = `${this.API_URL}/${id}`;

    return this.http.get<Contato>(templateStringUrl);
  }
  removerPorId(id: number): Observable<Contato>{
    const templateStringUrl = `${this.API_URL}/${id}`;
    
    return this.http.delete<Contato>(templateStringUrl);
  }

  editarContato(contato: Contato){
    const url = `${this.API_URL}/${contato.id}`;
    return this.http.put<Contato> (url, contato);
  }

  editarOuSalvarContato(contato: Contato): Observable<Contato>{
    if(contato.id){
      return this.editarContato(contato);
    }else{
      return this.salvarContato(contato);
    }
  }


}
