import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../services/status-service';

@Component({
  selector: 'app-status-listar',
  templateUrl: './status-listar.component.html',
  styleUrls: ['./status-listar.component.css']
})
export class StatusListarComponent implements OnInit {

  constructor(private router: Router,
    private statusService: StatusService) { }

  listaStatus: any = []
  id: number = 0;

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.statusService.getAll()
      .subscribe(q => {
        this.listaStatus = q;
      }, err => {
        alert("erro: " + err.message);
      })
  }

  editar(id: String) {
    this.router.navigate(['/status-info', { id: id }]);
  }

  novoStatus() {
    this.router.navigate(['/status-info']);
  }

  excluir(id: String) {
    this.statusService.delete(id).subscribe(q => {
      this.getAll();
    }, err => alert('erro: ' + err.message))
  }
}
