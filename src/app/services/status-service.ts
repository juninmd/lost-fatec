import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class StatusService {

    constructor(public http: Http) {
    }

    public getById(id: String) {
        return this.http.get(`${environment.api}status/${id}`, {}).map(response => response.json())
    }

    public getAll() {
        return this.http.get(`${environment.api}status/`, {}).map(response => response.json())
    }

    public post(body: any) {
        return this.http.post(`${environment.api}status/`, body, null).map(response => response.json())
    }

    public put(body: any) {
        return this.http.put(`${environment.api}status/`, body, {}).map(response => response.json())
    }

    public delete(id: String) {
        return this.http.delete(`${environment.api}status/${id}`, {}).map(response => response.json())
    }
}