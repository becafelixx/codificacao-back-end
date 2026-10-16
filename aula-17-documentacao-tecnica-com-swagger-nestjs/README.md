# Aula 17: Documentação Técnica

## 📚 Sobre a Aula

Na Aula 17 foi desenvolvido um exemplo de aplicação utilizando **NestJS** para trabalhar com a documentação técnica de uma API de produtos.

O objetivo principal foi compreender a organização dos arquivos de uma aplicação back-end, utilizando componentes responsáveis por receber requisições, definir as rotas e estruturar os dados enviados para a API.

Durante a aula, foi criada uma estrutura para o gerenciamento de produtos, incluindo um DTO (*Data Transfer Object*), utilizado para organizar os dados necessários para a criação de um produto.

## 🔹 Documentação Técnica

A documentação técnica é importante para registrar e explicar o funcionamento de um sistema, facilitando a compreensão de suas funcionalidades, rotas, parâmetros e respostas.

Em uma API, ela ajuda desenvolvedores a entender como realizar requisições e utilizar os recursos disponibilizados pela aplicação.

## 🔹 DTO — Data Transfer Object

O DTO é utilizado para definir a estrutura dos dados que podem ser recebidos pela aplicação.

Na aula, foi criado o arquivo:

`src/produtos/dto/criar-produto.dto.ts`

Esse arquivo é responsável por organizar os dados necessários para a criação de um produto, contribuindo para uma comunicação mais estruturada entre o cliente e o servidor.

## 🔹 Controller de Produtos

O arquivo `produtos.controller.ts` é responsável por definir as rotas relacionadas aos produtos e controlar o recebimento das requisições HTTP.

O controller funciona como uma camada de comunicação entre o cliente e a aplicação, direcionando as requisições para as operações correspondentes.

## 🔹 Estrutura do Projeto

A aplicação foi organizada em diretórios e arquivos para facilitar a manutenção e o desenvolvimento:

```text
src/
├── produtos/
│   ├── dto/
│   │   └── criar-produto.dto.ts
│   └── produtos.controller.ts
├── app.controller.spec.ts
├── app.module.ts
└── main.ts

test/
```

Cada arquivo possui uma função específica dentro da estrutura da aplicação, contribuindo para a organização do código e a separação de responsabilidades.

## 🔹 Testes e Configurações

O projeto também possui o arquivo `app.controller.spec.ts`, utilizado para organizar testes automatizados, além da pasta `test`, destinada aos testes da aplicação.

Os arquivos de configuração, como `.gitignore`, `.oxlintrc.json` e `.prettierrc`, auxiliam na organização do repositório, na análise do código e na padronização da formatação.

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Framework:** NestJS
- **Runtime:** Node.js
- **Arquitetura:** API REST
- **Organização de dados:** DTO
- **Testes:** Testes automatizados
- **Editor:** Visual Studio Code
- **Controle de Versão:** Git e GitHub

## 🎯 Objetivos da Aula

- Compreender a importância da documentação técnica em projetos back-end;
- Conhecer a organização de uma aplicação desenvolvida com NestJS;
- Utilizar DTOs para estruturar os dados recebidos pela API;
- Compreender a função dos controllers no tratamento de requisições HTTP;
- Organizar os arquivos e diretórios do projeto;
- Conhecer a importância dos testes e das configurações para a manutenção do código.