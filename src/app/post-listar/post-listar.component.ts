import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-listar',
  templateUrl: './post-listar.component.html',
  styleUrls: ['./post-listar.component.css']
})
export class PostListarComponent implements OnInit {

  constructor() { }

  posts: any = [
    { autor: "antonio", horario: new Date(), descricao: "Perdi meu fone de ouvido", status: "Perdido", anexo: 0 },
    { autor: "kaio", horario: new Date(), descricao: "Achei um fone de ouvido", status: "Achado", anexo: 1 },
  ];
  ngOnInit() {
  }


}
