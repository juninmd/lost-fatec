import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class LocalService {

    constructor(public http: Http) {
    }

    public getById(id: String) {
        return this.http.get(`${environment.api}local/${id}`, {}).map(response => response.json())
    }

    public getAll() {
        return this.http.get(`${environment.api}local/`, {}).map(response => response.json())
    }

    public post(body: any) {
        return this.http.post(`${environment.api}local/`, body, null).map(response => response.json())
    }

    public put(body: any) {
        return this.http.put(`${environment.api}local/`, body, {}).map(response => response.json())
    }

    public delete(id: String) {
        return this.http.delete(`${environment.api}local/${id}`, {}).map(response => response.json())
    }
}