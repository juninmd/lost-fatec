import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../services/categoria-service';

@Component({
  selector: 'app-categoria-info',
  templateUrl: './categoria-info.component.html',
  styleUrls: ['./categoria-info.component.css']
})
export class CategoriaInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService) { }

  form: any = {};

  ngOnInit() {
    this.form = {};

    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.categoriaService.getById(params["id"])
          .subscribe(q => {
            this.form = q[0];
          }, err => {
            alert("erro: " + err.message);
            this.router.navigate(['/categoria-listar'], {});
          })
      }
    })
  }

  salvar() {
    if (this.form._id) {
      this.categoriaService.put(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
    else {
      this.categoriaService.post(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
  }

  voltar() {
    this.router.navigate(['/categoria-listar'], {});
  }

}
