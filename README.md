# Intelipost: Teste prático para Frontend Javascript Developer 

> AngularJs Front-end Test. [Demo](https://intelipost-frontend-developer.herokuapp.com/) 

## Demo 
https://intelipost-frontend-developer.herokuapp.com/ 

![Overview](https://i.imgur.com/EREeYFL.pngL) 
## Funcionalidades 
- Busca por um artista/banda 
- Consumo da API do Youtube 
- Consumo da API do TicktMaster 
- Listagem dos principais videoclips da artista/banda
- Listagem do Site e das edes socias do artista/banda 

# Conteúdo 

* [Ferramentas e Frameworks](#ferramentas-e-frameworks) 
* [Instalando](#instalando) 
* [Rodando o app](#rodando-o-app) 
* [Testes Unitários](#testes-unit%C3%A1rios) 
* [Build](#build) 
* [Desenvolvimento](#desenvolvimento) 
* [Escolha das ferramentas e frameworks](#escolha-das-ferramentas-e-frameworks) 
* [Dificuldades](#dificuldades) 
* [Estrutura de Pastas](#estrutura-de-pastas) 
* [A fazer](#a-fazer) 
## Ferramentas e Frameworks 
- ES7 
- Less 
- AngularJs 
- Bootstrap 
- Ui-Router 
- Karma 
- Jasmine 
- Webpack 

## Instalando 
* `clone` este repositório 
* `npm install` ou `yarn install` para instalar todas as dependências 
## Rodando o app 
Depois que você tenha instalado todas as dependencias, você pode rodar o app com: 
```sh 
> npm run dev 
ou 
> yarn dev 
``` 
Isso vai iniciar um servidor local usando`webpack-dev-server` que vai assistir, buildar e recarregar para você. A porta que o app será exibido é `http://localhost:8080`. 


## Testes Unitários 
Você pode rodar os testes com 
* única execução: `npm test` ou `yarn test` 
* execução assistida (live mode): `npm run test-watch` ou `yarn test-watch` 

## Build 
Para efetuar o build para produção rode `npm run build` ou `yarn build` 
após que o build tiver terminado, você pode rodar o app executando `>node sever.js` 

## Desenvolvimento 

##### Escolha das ferramentas e frameworks. 

###### AngularJs

A escolha do AngularJs foi devido ser o framework JavaScript que possuo maior proficiência no qual tenho experiência desde 2016. 
Eu resolvi escolher o angularjs, pois se trata do framework JavaScript no qual tenho mais experiencia.
###### Less
A escolha do pré processador LESS, foi feita por dois motivos. Primeiro que eu ainda não havia utilizado o mesmo previamente, tinha experiencia somente com sass, então achei uma ótima oportunidade para aprender algo novo. E o outro motivo é que foi informado que na Intelipost se utiliza less, então foi uma junção do útil ao agradável.
###### Webpack
Já trabalhei com outras ferramentas de build/automação como grunt, broserfly e gulp. Entranto o webpack é o que mais me agrada,
###### Ui-Router
O ui-router foi escolhido por ser o melhor framework de rotas para angularJs, no qual é recomendado pela própria documentação do angular
###### Karma e Jasmine
Escolhi pois já tinha utilizado anteriormente em um pequeno projeto.


##### Configuração do Projeto

Nesse projeto utilizei o seguinte starter para o setup inicial do meu projeto.

https://github.com/preboot/angularjs-webpack

##### Estrutura de Pastas
O projeto está estruturado da seguinte maneira

```sh
├── src // código fonte
│   ├── app
│       ├── components  // componentes AngularJs 
│       ├── services // factorys para o consumo das APIS
│   └── public 
│       ├── index.html
├── dist // webpack build
├── node_modules
└── package.json
```

##### Dificuldades:
De maneira geral não tive grandes problemas no processo de desenvolvimento. Entretanto uma pequena dificuldade encontrada foi o uso do Ui-router para roteamento de componentes, pois minha experiencia prévia com componentes em angular tinha sido com o ngRoute. Entretanto ao longo do desenvolvimento entendi o funcionamento do mesmo, e não tive maiores dificuldades. 
Por fim a maior dificuldade do projeto, foi a realização de testes unitários. Como não estou familiarizado com as ferramentas é necessário um tempo maior para a confecção dos mesmos, devido a estudos e aprofundamento. Eu escrevi alguns testes, porem não de todos os componentes, por questão de não atrasar muito a entrega do projeto.


## A Fazer
- [x] Buscar Videos na API do Youtube
- [x] Buscar informações do Artista na API do TicketMaster
- [x] Listagem dos videos e das informações do artista
- [x] Validação no formulario de busca
- [ ] Testes de Unidade 
- [ ] Testes de Aceitação   