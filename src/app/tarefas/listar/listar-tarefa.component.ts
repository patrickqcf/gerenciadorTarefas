import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  constructor(private tarefaService : TarefaService) { }

  tarefas : Tarefa[];

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){
      this.tarefaService.remover(tarefa.id);
      console.log('id tarefa: ' + tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }

}
