# Aula 15: Tratamento de Erros e Status Codes

## 📚 Sobre a Aula

Na Aula 15 foi desenvolvido um exemplo de aplicação utilizando tratamento de erros e códigos de status HTTP.

O objetivo principal foi compreender como identificar e tratar erros durante a execução de uma aplicação, além de utilizar os códigos de status HTTP para indicar se uma requisição foi processada corretamente ou se ocorreu algum problema.

Durante a aula, foi utilizada uma aplicação com NestJS e TypeScript, explorando formas de lidar com exceções e retornar respostas adequadas para cada situação.

## 🔹 Tratamento de Erros

O tratamento de erros permite identificar situações inesperadas durante a execução de uma aplicação e retornar mensagens que ajudam a entender o problema.

No NestJS, é possível utilizar exceções para informar quando uma operação não pode ser concluída, evitando que a aplicação retorne respostas inadequadas.

## 🔹 Status Codes HTTP

Os status codes são códigos numéricos que indicam o resultado de uma requisição HTTP.

Alguns exemplos são:

- **200 — OK:** indica que a requisição foi realizada com sucesso.
- **201 — Created:** indica que um recurso foi criado com sucesso.
- **400 — Bad Request:** indica que a requisição contém dados inválidos.
- **401 — Unauthorized:** indica que a requisição precisa de autenticação.
- **404 — Not Found:** indica que o recurso solicitado não foi encontrado.
- **500 — Internal Server Error:** indica que ocorreu um erro interno no servidor.

## 🔹 Exceções no NestJS

O NestJS possui exceções HTTP que podem ser utilizadas para informar erros específicos durante o processamento das requisições.

Um exemplo é a exceção `NotFoundException`, utilizada quando um recurso não é encontrado.

```typescript
throw new NotFoundException('Recurso não encontrado');
```

Ao lançar essa exceção, o NestJS retorna uma resposta HTTP com o status `404` e uma mensagem informando o problema.

## 🔹 Respostas de Erro

As respostas de erro ajudam o cliente a compreender o motivo pelo qual uma requisição não foi concluída como esperado.

Com o tratamento adequado, é possível retornar mensagens claras e códigos HTTP correspondentes à situação, facilitando a identificação e a correção de problemas.

## 🔹 Arquivos da Aula

A estrutura do projeto apresenta arquivos e pastas utilizados no desenvolvimento da aplicação:

```text
aula-15-tratamento-erros-status-codes/
├── src/
├── test/
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
└── README.md
```

A pasta `src` contém os arquivos principais da aplicação, enquanto a pasta `test` reúne os arquivos utilizados para testes.

## 🛠️ Tecnologias e Ferramentas

- Linguagem: TypeScript
- Runtime: Node.js
- Framework: NestJS
- Protocolo: HTTP
- Controle de Versão: Git e GitHub
- Editor: Visual Studio Code

## 🎯 Objetivos da Aula

- Compreender o tratamento de erros em aplicações Back-End;
- Conhecer os principais códigos de status HTTP;
- Utilizar exceções para tratar situações de erro;
- Retornar mensagens adequadas para cada situação;
- Entender a diferença entre respostas de sucesso e de erro;
- Conhecer os recursos de tratamento de exceções do NestJS