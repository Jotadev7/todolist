Curso básico de Angular!

Para usar a estrutura Angular, você deve estar familiarizado com o seguinte:

* JavaScript
* HTML
* CSS

Conhecimento de TypeScript é útil, mas não obrigatório.

----- Para verificar se já tem o node, npm e angular instalado: node --version, npm --version e ng--version. -----

Para instalar o Angular em seu sistema local, você precisa do seguinte:

- Node.js

Angular requer um LTS ativo ou LTS de manutenção versão do Node.js. (Se você não tiver certeza de qual versão do Node.js é executada em seu sistema, execute "node -v" em uma janela de terminal)

- Gerenciador de pacotes npm

Angular, Angular CLI e aplicações angulares dependem de pacotes npm para muitos recursos e funções. Para baixar e instalar pacotes npm, você precisa de um gerenciador de pacotes npm. Normalmente usa o cliente npm interface de linha de comando, que é instalada Node.js por padrão.

- Instale o Angular CLI

Você usa a CLI Angular para criar projetos, gerar código de aplicativo e biblioteca e executar uma variedade de tarefas de desenvolvimento em andamento, como teste, empacotamento e implantação.

Para instalar o Angular CLI, abra uma janela de terminal e execute o seguinte comando: "npm install -g @angular/cli".

Comandos:

- ng new (nome do projeto) -- Para criar um novo projeto Angular com todas as dependencias.

- ng server -- Para iniciar o projeto

- ng g c (nome) -- componente
- ng g class (nome) -- classe
- ng g s (nome) -- serviço
(Comandos ng g são para gerar algo, seja componente com "c", uma classe com o "class", um service com o "s"...)

&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

No projeto aula3 (projeto criado com o comando "ng new aula3") de Angular usei as variáveis, ngFor, ngif e ngSwitch, pipes, classe e construtores, métodos, serviço, two way biding, rota e navegação,

&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

$$ Variáveis $$

"(nome): number" = para numéricos
"(nome): string" = para texto
"(nome): boolean" = para verdadeiro ou falso
"(nome) = []" = para array (por padrão é um tipo Never, para usar qualquer dado usar o "(nome): any[] = []")

$$ ngFor, ngif, ngSwitch $$

- O ngFor é a estrutura de repetição, usamos por exemplo: <ul *ngFor="let carro of carros">, onde essa lista vai percorrer todos os carros do componente carros.
Há também outros parâmetros que podemos informar, como: 

<ul *ngFor="let car of carros; index as i">, para mostrar o indice.
<ul *ngFor="let car of carros; first as f">, para colocar o primeiro objeto como true e resto false.
<ul *ngFor="let car of carros; last as l">, para o último objeto ser true e o resto false.
<ul *ngFor="let car of carros; even as e">, para números pares serem positivos.
<ul *ngFor="let car of carros; odd as o">, para números ímpares serem positivos.

- O ngif é a estrutura de condição, usamos por exemplo: <div *ngIf="mostraTitulo; then thenBlock; else elseBlock">. Para funcionar precisamos usar o ng-template: 

<ng-template #thenBlock>
  <h3>Estrutura verdadeira.</h3>
  <p>Entrou nesse bloco pois é verdadeira.</p>
</ng-template>

Estrutura acima é pra verdadeiro, abaixo para falso:

<ng-template #elseBlock>
  <h3>Estrutura falsa.</h3>
  <p>Entrou nesse bloco pois é falsa.</p>
</ng-template>

Há também outra forma de usar a condição, exemplo:

<p *ngIf="mostraTitulo">
  Outra forma de exibir se verdadeiro ou falso.
</p>

- O ngSwitch é usado quando precisamos comparar o valor de uma variavel com multiplos valores. No componente criamos a variavel "color", e de acordo com os valores atruibuidos teremos o exemplo:

<div [ngSwitch]="color">
  <p *ngSwitchCase="'vermelho'">
    Você selecionou a cor vermelha.
  </p>
  <p *ngSwitchCase="'azul'">
    Você selecionou a cor azul.
  </p>
  <p *ngSwitchDefault>
    Não escolheu nenhuma das cores.
  </p>
</div>

$$ Pipes $$

Pipe é usado para que possa formatar a exibição do código sem precisar escrever muita linha. Exemplo:

<h3>{{nomes | uppercase}}</h3> -- Para tudo minusculo
<h3>{{nomes | lowercase}}</h3> -- Para tudo maiusculo
<h3>{{nomes | titlecase}}</h3> -- Para a primeira letra de cada palavra ser maiuscula
<h3>{{nomes | slice:1}}</h3> -- Para fatiar a palavra em quantos caracteres desejar
<h3>{{nomes | json}}</h3> -- Para exibir no formato de Json
<h3>{{0.5 | percent}}</h3> -- Para exibir em porcentagem
<h3>{{0.5 | currency}}</h3> -- Para exibir em valor de moeda
<h3>{{date | date:'short'}}</h3> -- Para exibir data e hora de forma curta
<h3>{{date | date:'shortDate'}}</h3> -- Para exibir data de forma curta
<h3>{{date | date:'shortTime'}}</h3> -- Para exibir hora de forma curta



$$ Classe $$

Usei o comando "ng g class (nome)", logo criou uma "(nome).ts", com o export e o construtor com os dados que desejar, exemplo:

export class Carro { // Classe carro, com construtor
    constructor(
        public id: number,
        public nome: string
    ) { }
}

Lembrando de importar a classe quando for usar: "import { Carro } from './carro';". Uso na prática:
// Criando array do objeto carro.
carros = [
    new Carro(1, "BMW"),
    new Carro(2, "AUDI")
  ]

$$ Métodos $$

Exemplo de método:
olaMundo(){
    return "Olá Mundo!";
  }
retornoMetodo(){
    console.log("Testando retorno do método");
  }

{{olaMundo()}} <!--Chamando o método no HTML-->

$$ Serviço $$ (Responsável por receber as requisições, ligado a API)

Para criar o serviço utilizei o comando "ng g s (nome)", logo após pegamos o campo "providers" de app.module.ts, inserimos o nome do serviço criado, e importamos. Exemplo:
"providers: [CarroService],", e na parte superior: import { CarroService } from './carro.service';.
No service.ts criamos um método (agora são os REST: get, post, delete), exemplo:

getCarros(){
    return [
      {"id":1, "marca": "BMW", "fab": 2002},
      {"id":2, "marca": "Volks", "fab": 2003},
      {"id":3, "marca": "Fiat", "fab": 2004},
      {"id":4, "marca": "Chev", "fab": 2005}
      ];
}

No component.ts (do componente criado, como desejar) pegamos o valor de 'selector' para usar no HTML. Exemplo: selector: 'app-carro-lista', pegamos o 'app-carro-lista' e criamos a tag <app-carro-lista></app-carro-lista> no HTML. No construtor do componente criamos um array para armazenar os valores do serviço: public carros = [] as any; (ou poderia ser "public carros: any[] = []"), criamos um construtor: constructor(private _carroService : CarroService) { }, importamos a classe serviço "import { CarroService } from '../carro.service';" e no método ngOnInit() que é a ação realizada ao iniciar a aplicação fizemos: 

ngOnInit(): void {
    this.carros = this._carroService.getCarros();
  }

E no HTML do componente, tratamos esses dados. Exemplo: (ngFor usado para percorrer toda a lista preenchendo com objetos)

<ul *ngFor="let carro of carros">
    <li>{{carro.id}} - {{carro.marca}} - {{carro.fab}}</li>
</ul>

$$ Two way biding $$ (Para fazer alteração na view e model ao mesmo tempo)

Para usar esse funcionalidade precisamos importar no module.ts o FormsModule no campo 'imports', e importar também a classe: import { FormsModule } from '@angular/forms';
Após as devidas importações, no component.html criamos a tag: <input [(ngModel)]="nome">, e para exibir usamos a interpolation: {{nome}}. 
No component.ts criamos uma variável e inicializamos: public nome = "João";

$$ Rota e navegação $$

Para utilizar rotas criamos um novo projeto usando o "ng new (nome do projeto) --routing" para já criar importando as rotas do Angular. Criamos os componentes (ng g c "nome") das páginas que desejamos, no exemplo departamento, funcionário, home e pagenotfound. Na classe app-routing.module.ts fizemos os paths das rotas:

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}, -- Para redirecionar quando não inserir nada no link.
  {path: 'home', component: HomeComponent}, -- Redireciona para a página home.
  {path: 'funcionario', component: FuncionarioComponent}, -- Redireciona para a página funcionário.
  {path: 'departamento', component: DepartamentoComponent}, -- Redireciona para a página departamento.
  {path: "**", component: PagenotfoundComponent} -- Quando digitamos algo diferente no link redireciona para a pagenotfound.
];

No app.component.html criamos a navegação, exemplo: (routerLinkActive é o estilo do CSS)

<nav>
  <a routerLink="/home" routerLinkActive="active">Home</a>
  <a routerLink="/departamento" routerLinkActive="active">Departamento</a>
  <a routerLink="/funcionario" routerLinkActive="active">Funcionario</a>
</nav>
