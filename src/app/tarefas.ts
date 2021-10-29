import { Categoria } from "./tarefa/utils/tarefa-categoria-enum";

export class Tarefas {
    public id: number;
    public titulo: string;
    public descricao: string;
    public categoria : string;
    public dataConclusao: string;
    public isDone: boolean;

    constructor(id:number, titulo:string, descricao:string, categoria:string, dataConclusao:string, isDone:boolean){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
        this.dataConclusao = dataConclusao;
        this.isDone = isDone;
    }
}
