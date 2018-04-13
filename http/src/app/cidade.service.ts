import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CidadeService {

  url = 'http://localhost:3000/cidades';

  constructor(private http: Http) { }

  consultar(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json());
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post(this.url, cidade)
      .toPromise()
      .then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }

  atualizar(cidade: any): Promise<any> {
    return this.http.put(`${this.url}/${cidade.id}`, cidade)
      .toPromise()
      .then(reponse => reponse.json())
      .catch(erro => {
        return Promise.reject(`Erro ao alterar cidade ${cidade.id}.`);
      });
  }

}
