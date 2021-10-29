import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefas } from './tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/tarefas";

  getTarefas() : Observable <Tarefas[]> {
    return this._httpClient.get<Tarefas[]>(this.url);
  }

  getTarefaPorId(id: number): Observable<Tarefas> {
    return this._httpClient.get<Tarefas>(`${this.url}/${id}`);
  }

  postTarefa(tarefa : Tarefas){
    return this._httpClient.post(this.url, tarefa);
  }

  putTarefa(tarefa : Tarefas){
    return this._httpClient.put(`${this.url}/${tarefa.id}`, tarefa);
  }

  deleteTarefa(id : number){
    return this._httpClient.delete(`${this.url}/${id}`);
  }
}
