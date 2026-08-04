import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/categoria-service';

@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  constructor(private router: Router,
    private categoriaService: CategoriaService) { }

  listaCategoria: any = []
  id: number = 0;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.categoriaService.getAll()
      .subscribe(q => {
        this.listaCategoria = q;
      }, err => {
        alert("erro: " + err.message);
      })
  }

  editar(id: String) {
    this.router.navigate(['/categoria-info', { id: id }]);
  }

  novoCategoria() {
    this.router.navigate(['/categoria-info']);
  }

  excluir(id: String) {
    this.categoriaService.delete(id).subscribe(q => {
      this.getAll();
    }, err => alert('erro: ' + err.message))
  }
}
