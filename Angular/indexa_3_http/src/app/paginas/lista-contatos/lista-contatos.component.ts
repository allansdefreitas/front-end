import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';



import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

import { ContatoService } from '../../services/contato.service';
import { Contato } from '../../componentes/contato/contato';
import { PerfilContatoComponent } from "../perfil-contato/perfil-contato.component";


@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    RouterLink,
],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  // contatos: Contato[] = contatosFromJSON;
  contatos: Contato[] = [];

  textoBusca: string = '';

  constructor(private contatoService: ContatoService){
  }

  ngOnInit(){
    console.log("onInit")
    // O subscribe() vincula o Observer (aqui) e o Observable
    this.contatoService.obterContatos().subscribe(contatos => {
      this.contatos = contatos;
    })
  }

  getTextoBusca(){
    return this.textoBusca;
  }

  getTextoBuscaSemSimbolos(){
    return this.removeSpecialCharacters(this.getTextoBusca());
  }

  private removeSpecialCharacters(texto: string): string{
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[]{

    // this.text

    // or if(!this.textoBusca)
    if(this.getTextoBuscaSemSimbolos().length ===0){
      return this.contatos;
    }else{
      return this.contatos.filter(contato => {
        let ithContatoNome = this.removeSpecialCharacters(contato.nome);
        let ithContatoNomeLower: string = ithContatoNome.toLowerCase();

        return ithContatoNomeLower.includes(this.getTextoBuscaSemSimbolos());

      })
    }
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[]{

    let contatosPorTextoReturned: Contato[] = this.filtrarContatosPorTexto();
    
    // or return this.filtrarContatosPorTexto.filter(...
    return contatosPorTextoReturned.filter ( contato => {
      let letraInicialNome: string = this.removeSpecialCharacters(contato.nome.toLowerCase());
      return letraInicialNome.startsWith(letra);
    })    

    return this.contatos;

  }
}
