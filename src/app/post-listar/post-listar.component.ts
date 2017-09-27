import { Component, OnInit, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {

  constructor() { }

  modalActions = new EventEmitter<string | MaterializeAction>();

  posts: any = [
    { autor: "antonio", horario: new Date(), descricao: "Perdi meu fone de ouvido", status: "Perdido", anexo: 0 },
    { autor: "kaio", horario: new Date(), descricao: "Achei um fone de ouvido", status: "Achado", anexo: 1 },
  ];
  ngOnInit() {
  }

  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }
}
