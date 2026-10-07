Aula 13: Middlewares e Interceptors

📚 Sobre a Aula

Na Aula 13 foram estudados os conceitos de Middlewares e Interceptors utilizando o framework NestJS.

O objetivo principal foi compreender como essas ferramentas podem ser utilizadas para executar ações durante o processamento das requisições, permitindo controlar e modificar o comportamento da aplicação.

Durante a aula, foram trabalhados recursos do NestJS para interceptar requisições e executar funções antes ou depois do processamento de uma rota.

🔹 Middlewares

Os Middlewares são funções executadas durante o processamento de uma requisição HTTP.

Eles podem ser utilizados para realizar tarefas como validações, registros de informações, autenticação e outras operações antes que a requisição chegue ao controller.

Um middleware pode analisar a requisição e decidir se ela deve continuar o processamento ou não.

🔹 Interceptors

Os Interceptors permitem interceptar o fluxo de execução de uma aplicação.

Eles podem executar ações antes e depois da chamada de uma rota, sendo úteis para tarefas como tratamento de respostas, registro de informações, transformação de dados e controle do tempo de execução.

No NestJS, os interceptors utilizam recursos como o ExecutionContext e o CallHandler para controlar o fluxo da requisição.

🔹 Diferença entre Middleware e Interceptor

O Middleware atua principalmente antes do processamento da rota, podendo modificar a requisição ou executar alguma validação.

Já o Interceptor consegue atuar antes e depois da execução da rota, permitindo também modificar ou tratar a resposta retornada.

🔹 Estrutura do Projeto

O projeto desenvolvido durante a aula possui uma estrutura baseada no NestJS:

src/
test/
package.json
nest-cli.json
tsconfig.json

A pasta src contém os arquivos responsáveis pela implementação da aplicação.

🛠️ Tecnologias e Ferramentas
Linguagem: TypeScript
Framework: NestJS
Runtime: Node.js
Testes: Vitest
Gerenciador de Pacotes: NPM
Controle de Versão: Git e GitHub
Editor: Visual Studio Code
🎯 Objetivos da Aula
Compreender o conceito de Middleware;
Compreender o conceito de Interceptor;
Entender o fluxo de uma requisição HTTP;
Utilizar recursos do NestJS para controlar requisições;
Conhecer as diferenças entre Middlewares e Interceptors;
Aprender como essas ferramentas podem ser utilizadas no desenvolvimento de APIs.