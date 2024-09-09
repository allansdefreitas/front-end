import { Injectable } from '@angular/core';


interface Contato {
  id: number
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private CONTATOS_LOCAL_STORAGE_KEY = 'contatos'; 

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 4, "nome": "Bruno", "telefone": "95 695521583"}
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