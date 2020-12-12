import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { pairs } from 'rxjs';

import { TarefaRoutes } from "./tarefas";
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  
  // o operador '...' concatena um array filho com o pai, portanto, como o TarefaRoutes é um array de rotas em JSON e o Routes TAMBÉM é um array de rotas
  // foi optado apenas concatenar um com o outro com esse operador, interessante.
 ...TarefaRoutes 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})
export class AppRoutingModule {}