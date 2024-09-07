import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FormsModule } from '@angular/forms';


interface Contato {
  id: number
  nome: string
  telefone: string
}

import contatosFromJSON from './agenda.json';
import { FormularioContatoComponent } from "./paginas/formulario-contato/formulario-contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = contatosFromJSON;

  textoBusca: string = '';


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
    return this.filtrarContatosPorTexto().filter ( contato => {
      let letraInicialNome: string = this.removeSpecialCharacters(contato.nome.toLowerCase());
      return letraInicialNome.startsWith(letra);
    })    

    return this.contatos;

  }
  

}
