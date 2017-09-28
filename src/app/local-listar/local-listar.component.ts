import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../services/local-service';

@Component({
  selector: 'app-local-listar',
  templateUrl: './local-listar.component.html',
  styleUrls: ['./local-listar.component.css']
})
export class LocalListarComponent implements OnInit {

  constructor(private router: Router,
    private localService: LocalService) { }

  listaLocal: any = []
  id: number = 0;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.localService.getAll()
      .subscribe(q => {
        this.listaLocal = q;
      }, err => {
        alert("erro: " + err.message);
      })
  }

  editar(id: String) {
    this.router.navigate(['/local-info', { id: id }]);
  }

  novoLocal() {
    this.router.navigate(['/local-info']);
  }

  excluir(id: String) {
    this.localService.delete(id).subscribe(q => {
      this.getAll();
    }, err => alert('erro: ' + err.message))
  }
}
