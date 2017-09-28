import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {

  constructor(private router: Router,
    private postService: PostService) { }

  listaPost: any = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getAll()
      .subscribe(q => {
        this.listaPost = q;
      }, err => {
        alert("erro: " + err.message);
      })
  }

  editar(id: String) {
    this.router.navigate(['/post-info', { id: id }]);
  }

  novo() {
    this.router.navigate(['/post-info']);
  }

  excluir(id: String) {
    this.postService.delete(id).subscribe(q => {
      this.getAll();
    }, err => alert('erro: ' + err.message))
  }

  naoPronto() {
    alert("Essa funcionalidade não foi desenvolvida");
  }
}
