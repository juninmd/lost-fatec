import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {

    constructor(public http: Http) {
    }

    public getById(id: String) {
        return this.http.get(`${environment.api}categoria/${id}`, {}).map(response => response.json())
    }

    public getAll() {
        return this.http.get(`${environment.api}categoria/`, {}).map(response => response.json())
    }

    public post(body: any) {
        return this.http.post(`${environment.api}categoria/`, body, null).map(response => response.json())
    }

    public put(body: any) {
        return this.http.put(`${environment.api}categoria/`, body, {}).map(response => response.json())
    }

    public delete(id: String) {
        return this.http.delete(`${environment.api}categoria/${id}`, {}).map(response => response.json())
    }
}