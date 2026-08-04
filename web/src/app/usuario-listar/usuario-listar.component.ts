import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }

  listaUsuario: any = []
  id: number = 0;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.usuarioService.getAll()
      .subscribe(q => {
        this.listaUsuario = q;
      }, err => {
        alert("erro: " + err.message);
      })
  }

  editar(id: String) {
    this.router.navigate(['/usuario-cadastrar', { id: id }]);
  }

  novo() {
    this.router.navigate(['/usuario-cadastrar']);
  }

  excluir(id: String) {
    this.usuarioService.delete(id).subscribe(q => {
      this.getAll();
    }, err => alert('erro: ' + err.message))
  }
}
