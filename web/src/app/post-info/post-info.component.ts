import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post-service';
import { CategoriaService } from '../services/categoria-service';
import { StatusService } from '../services/status-service';
import { LocalService } from '../services/local-service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private categoriaService: CategoriaService,
    private statusService: StatusService,
    private localService: LocalService) { }

  status: any = [];
  categoria: any = [];
  local: any = [];

  form: any = {};

  ngOnInit() {
    this.form = {};
    this.getAll();
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.postService.getById(params["id"])
          .subscribe(q => {
            this.form = q;
          }, err => {
            alert("erro: " + err.message);
            this.router.navigate(['/post-listar'], {});
          })
      }
    })
  }

  getAll() {
    this.categoriaService.getAll().subscribe(q => {
      this.categoria = q;
    }, err => alert('erro'))

    this.statusService.getAll().subscribe(q => {
      this.status = q;
    }, err => alert('erro'))

    this.localService.getAll().subscribe(q => {
      this.local = q;
    }, err => alert('erro'))
  }

  salvar() {
    if (this.form._id) {
      this.postService.put(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
    else {
      this.postService.post(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
  }

  voltar() {
    this.router.navigate(['/post-listar'], {});
  }

}
