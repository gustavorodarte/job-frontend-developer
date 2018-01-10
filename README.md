# Intelipost: Teste prático para Frontend Javascript Developer

>  AngularJs Front-end Test. [Demo](https://intelipost-frontend-developer.herokuapp.com/) 

## Demo
https://intelipost-frontend-developer.herokuapp.com/

![Overview](https://i.imgur.com/OCjt0c0.png)
## Funcionalidades
- Busca por um artista/band
- Consumo da API do Youtube
- Consumo da API do TicktMaster
- Listagem dos principais videoclips da artista/band
- Listagem do Site e das edes socias do artista/banda

# Conteudo

* [Estrutura de Pastas](#estrutura-de-pastas)
    * [Ferramentas e Framewroks](#dependencies)
    * [Instalando](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)


## Estrutura de Pastas
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
* `npm install` ou `yarn install`  para instalar todas as dependencias
## Rodando o app
Depois que você tenha instalado todas as dependencias, você pode rodar o app com:
```sh
> npm run dev
or
> yarn dev
```
Isso vai iniciar um servidor local usando`webpack-dev-server` que vai assistir, buildar e recaregar para você. A porta que o app será exibido é  `http://localhost:8080`.


## Testes Unitarios
Você pode rodar os testes com
* uníca execução: `npm test` ou  `yarn test`
* execução assistida (live mode): `npm run test-watch` ou `yarn test-watch` 

## Build
Para efetuar o build para produção  rode `npm run build` ou `yarn build` 
Depois que o build tiver terminado, você pode rodar o app executando `>node sever.js` 