import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContatoComponent,
    ContainerComponent,
    RouterLink,
    SeparadorComponent
],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    avatar: '',
    telefone: '999999',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ){}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      const idNumber = parseInt(id);

      this.contatoService.buscarPorId(idNumber).subscribe((contato) => {
        this.contato = contato;
      });
    }
  }

  excluirContato(){
    const id = this.contato.id;

    if(id){
      this.contatoService.removerPorId(id).subscribe(() => {
        this.router.navigateByUrl('/lista-contatos');
      });
    }
  }
  

}
