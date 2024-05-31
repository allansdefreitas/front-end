import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';


interface Contato {
  id: number
  nome: string
  telefone: string
}

import contatosFromJSON from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    ContainerComponent, 
    CabecalhoComponent, 
    SeparadorComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = contatosFromJSON;

  filtrarContatosPorLetraInicial(letra: string): Contato[]{

    return this.contatos.filter ( contato => {
      let letraLowerCase: string = contato.nome.toLowerCase();
      return letraLowerCase.startsWith(letra);
    })    

    return this.contatos;

  }
  

}