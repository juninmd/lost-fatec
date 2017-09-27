import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  constructor() { }

  status: any = [
    { name: "Achado", value: 0 },
    { name: "Perdido", value: 1 },
  ];

  ngOnInit() {
  }

}
