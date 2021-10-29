import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TarefaComponent } from "./tarefa/tarefa.component";

const routes: Routes = [
    {path: '', redirectTo: 'tarefas', pathMatch: 'full'},
    {path: 'tarefas', component: TarefaComponent},
    {path: 'concluidas', component: TarefaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }