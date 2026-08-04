import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) { }

  form: any = {};


  ngOnInit() {
    this.form = {};

    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.usuarioService.getById(params["id"])
          .subscribe(q => {
            this.form = q;
          }, err => {
            alert("erro: " + err.message);
            this.router.navigate(['/usuario-listar'], {});
          })
      }
    })
  }

  salvar() {
    if (this.form._id) {
      this.usuarioService.put(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
    else {
      this.usuarioService.post(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
  }

  voltar() {
    this.router.navigate(['/usuario-listar'], {});
  }
}
