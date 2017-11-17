import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService) { }

  form: any = {};

  ngOnInit() {
    this.form = {};
    localStorage.removeItem('usuario');
  }

  logar() {
    this.usuarioService.login(this.form).subscribe(q => {
      localStorage.setItem('usuario', q._id);
      window.location.href = 'home';
    }, err => {
      localStorage.removeItem('usuario');
      alert('Usuário/Senha inválido');
    })
  }

}
