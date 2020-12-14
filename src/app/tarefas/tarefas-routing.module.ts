import { Routes } from '@angular/router';

import { ListarTarefaComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastrar";
import { EditarTarefasComponent } from "./editar";

export const TarefaRoutes: Routes =[
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        // :id significa que o parâmetro id será passado pela view
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
    }
];