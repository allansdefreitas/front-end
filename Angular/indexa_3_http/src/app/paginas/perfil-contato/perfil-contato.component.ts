import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContatoComponent,
    ContainerComponent
],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '999999',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }

}
