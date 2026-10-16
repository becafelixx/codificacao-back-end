# Aula 16: Validação de Schemas

## 📚 Sobre a Aula

Na Aula 16 foi desenvolvido um projeto utilizando NestJS com foco na validação de dados em aplicações back-end.

O objetivo principal foi compreender a importância de validar as informações recebidas por uma API antes de processá-las, garantindo maior organização, segurança e consistência dos dados.

Durante a aula, foram trabalhados conceitos relacionados à validação de schemas, que permitem definir regras para verificar se os dados enviados pelo cliente estão de acordo com a estrutura esperada pela aplicação.

## 🔹 Validação de Schemas

A validação de schemas consiste em definir regras que determinam quais dados são aceitos por uma aplicação e quais características essas informações devem apresentar.

Esse processo ajuda a identificar informações inválidas ou incompletas antes que sejam utilizadas pelo sistema, contribuindo para a prevenção de erros e para a confiabilidade da API.

## 🔹 Validação de Dados em APIs

Em uma API, os dados geralmente são recebidos por meio de requisições HTTP. Antes de realizar operações com essas informações, é importante verificar se elas seguem as regras definidas pelo sistema.

A validação permite, por exemplo, verificar campos obrigatórios, tipos de dados e formatos esperados, facilitando o tratamento de informações incorretas.

## 🔹 Estrutura do Projeto

O projeto foi organizado em diretórios e arquivos de configuração que auxiliam no desenvolvimento, na execução e nos testes da aplicação.

```text
aula-16-validacao-schemas/
├── src/
├── test/
├── .gitignore
├── .oxlintrc.json
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.build.json
├── tsconfig.json
├── vitest.config.e2e.ts
└── vitest.config.ts
```

A pasta `src` contém os arquivos principais da aplicação, enquanto a pasta `test` é destinada aos testes. Os arquivos de configuração auxiliam na compilação, na padronização do código e na execução dos testes automatizados.

## 🔹 Testes e Configurações

O projeto possui configurações para testes com Vitest, permitindo verificar o comportamento da aplicação e identificar possíveis problemas durante o desenvolvimento.

Também utiliza ferramentas de organização e análise de código, contribuindo para a padronização e a manutenção do projeto.

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** TypeScript
- **Framework:** NestJS
- **Runtime:** Node.js
- **Validação:** Schemas de validação
- **Testes:** Vitest
- **Editor:** Visual Studio Code
- **Controle de Versão:** Git e GitHub

## 🎯 Objetivos da Aula

- Compreender o conceito de validação de schemas;
- Entender a importância da validação de dados em APIs;
- Identificar informações inválidas antes de processá-las;
- Conhecer a organização de um projeto desenvolvido com NestJS;
- Compreender a importância dos testes automatizados;
- Utilizar ferramentas de configuração e padronização do código;
- Desenvolver aplicações back-end mais organizadas e confiáveis.