import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private CONTATOS_LOCAL_STORAGE_KEY = 'contatos'; 

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email" : "ana@gmail.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email" : "antonio@gmail.com"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235", "email" : "agata@gmail.com"},
    {"id": 4, "nome": "Bruno", "telefone": "95 695521583", "email" : "bruno@gmail.com"}
  ];


  constructor() {

    //Get localStorage data
    const contatosLocalStorageString = localStorage.getItem(this.CONTATOS_LOCAL_STORAGE_KEY);

    const contatosLocalStorage = 
      contatosLocalStorageString ? JSON.parse(contatosLocalStorageString)
      : null;  

    if(contatosLocalStorage != null){
      // this.contatos = contatosLocalStorage || null;
      this.contatos = contatosLocalStorage;
    }
    
    // Set localStorage data
    localStorage.setItem(this.CONTATOS_LOCAL_STORAGE_KEY, JSON.stringify(this.contatos))

  }

  obterContatos(){
    return this.contatos;
  }

  salvarContato(contato: Contato){
    console.log(contato);
    this.contatos.push(contato);
    // Set localStorage data
    localStorage.setItem(this.CONTATOS_LOCAL_STORAGE_KEY, JSON.stringify(this.contatos))
  }

}
