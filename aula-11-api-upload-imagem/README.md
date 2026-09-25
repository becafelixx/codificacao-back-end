# Aula 11: API de Upload de Imagem

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![NestJS](https://img.shields.io/badge/NestJS-v10-red?style=for-the-badge&logo=nestjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)

![UC](https://img.shields.io/badge/UC-Codificação_para_Back--End-blue?style=for-the-badge)
![SENAI](https://img.shields.io/badge/SENAI-AMAPÁ-orange?style=for-the-badge)

## 📚 Sobre a Aula

Na Aula 11 foi desenvolvido um exemplo de **API para upload de imagens** utilizando o framework NestJS.

O objetivo principal foi aprender como receber arquivos enviados por meio de uma requisição HTTP, processar esses arquivos e realizar seu armazenamento no servidor da aplicação.

Durante a aula, foram utilizados recursos do NestJS para trabalhar com arquivos e requisições do tipo `multipart/form-data`.

## 🔹 Upload de Imagens

O **upload de imagens** permite que um usuário envie um arquivo para a aplicação através de uma requisição HTTP.

Nesse caso, a API recebe a imagem enviada pelo cliente e realiza o processamento necessário para armazená-la na aplicação.

Um exemplo de rota utilizada para o upload é:

```http
POST /imagem/upload