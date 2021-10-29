import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { Tarefas } from '../tarefas';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})
export class TarefaComponent implements OnInit {
  constructor(private _tarefaService: TarefaService) {}
  public tarefas: Tarefas[];

  ngOnInit(): void {
    this._tarefaService.getTarefas().subscribe((retorno) => {
      this.tarefas = retorno.map((item) => {
        return new Tarefas(
          item.id,
          item.titulo,
          item.descricao,
          item.categoria,
          item.dataConclusao,
          item.isDone
        );
      });
    });
  }
}
