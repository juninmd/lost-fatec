import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusService } from '../services/status-service';

@Component({
  selector: 'app-status-info',
  templateUrl: './status-info.component.html',
  styleUrls: ['./status-info.component.css']
})
export class StatusInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private statusService: StatusService) { }

  form: any = {};

  ngOnInit() {
    this.form = {};

    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.statusService.getById(params["id"])
          .subscribe(q => {
            this.form = q;
          }, err => {
            alert("erro: " + err.message);
            this.router.navigate(['/status-listar'], {});
          })
      }
    })
  }

  salvar() {
    if (this.form._id) {
      this.statusService.put(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
    else {
      this.statusService.post(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
  }

  voltar() {
    this.router.navigate(['/status-listar'], {});
  }

}
