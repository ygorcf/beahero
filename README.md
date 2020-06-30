# Be A Hero
Projeto Be a Hero da semana OmniStack 11.0.

## Semana OmniStack
A semana OmniStack é um mini curso gratuito dado pela Rockeseat, com o objetivo de montar um projeto inteiro usando a stack NodeJs, ReactJs e ReactNative.

## Projeto
O projeto consiste em um sistema para auxiliar ONGs a receberem um auxilio de pessoas em incidentes. A versão web permite as ONGs cadastrar os incidentes que podem receber um auxílio e a versão mobile permite pessoas comuns entrarem em contato com as ONGs para doar  dinheiro para auxiliá-las.

## Instalação

O projeto foi todo feito em NodeJs ([Download do NodeJs](https://nodejs.org/pt-br/download/)). Com o NodeJs instalado no computador utilize o comando abaixo para instalar o gerenciador de pacotes Yarn:
```
npm install -g yarn
```

Depois de instalado o Yarn basta executar um comando, que deve ser executado tanto na pasta 'backend' quanto na pasta 'frontend' e também na pasta 'mobile':
```
yarn install
```

## Execução

### Backend
Abra a pasta 'backend' e basta executar o comando abaixo que o backend estará sendo executado e esperando as requisições na porta 3333:
```
yarn start
```
Para a execução dos testes basta executar o seguinte comando:
```
yarn test
```

### Frontend
Abra a pasta 'frontend' e basta executar o comando abaixo que o frontend estará sendo servido na porta 3000:
```
yarn start
```

### Mobile
Para a execução do projeto mobile o celular deve ter o aplicativo [expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR). Com o aplicativo do Expo instalado no celular, abra a pasta 'mobile' pelo computador e execute o comando abaixo:
```
yarn start
```
Depois que estiver sendo executado, o aplicativo será buildado e será criado um QRCode que deverá ser lido pelo aplicativo do Expo no celular e então o app mobile será executado
