# Aula 12: Request e Response Avançado

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)

![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

## 📚 Sobre a Aula

Na Aula 12 foi desenvolvido um exemplo de aplicação utilizando **Request e Response Avançado** com o framework NestJS.

O objetivo principal foi compreender melhor como trabalhar com as informações recebidas nas requisições HTTP e como controlar as respostas enviadas pela API.

Durante a aula, foram utilizados recursos do NestJS para trabalhar com requisições, respostas HTTP, parâmetros e controle do fluxo das respostas, além da criação de uma rota relacionada à segurança.

## 🔹 Request e Response

O **Request (requisição)** representa as informações enviadas pelo cliente para o servidor. Essas informações podem conter parâmetros, dados, cabeçalhos e outras informações necessárias para o processamento da requisição.

Já o **Response (resposta)** representa o retorno enviado pelo servidor ao cliente após o processamento da requisição.

No NestJS, esses recursos podem ser utilizados dentro dos controllers para permitir um maior controle sobre o comportamento da API.

## 🔹 Controllers

Durante a aula foram utilizados os arquivos:

```text
app.controller.ts
seguranca.controller.ts