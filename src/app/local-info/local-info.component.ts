import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from '../services/local-service';

@Component({
  selector: 'app-local-info',
  templateUrl: './local-info.component.html',
  styleUrls: ['./local-info.component.css']
})
export class LocalInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private localService: LocalService) { }

  form: any = {};

  ngOnInit() {
    this.form = {};

    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.localService.getById(params["id"])
          .subscribe(q => {
            this.form = q;
          }, err => {
            alert("erro: " + err.message);
            this.router.navigate(['/local-listar'], {});
          })
      }
    })
  }

  salvar() {
    if (this.form._id) {
      this.localService.put(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
    else {
      this.localService.post(this.form).subscribe(q => {
        this.voltar();
      }, err => {
        alert("erro " + err.message)
      })
    }
  }

  voltar() {
    this.router.navigate(['/local-listar'], {});
  }

}
