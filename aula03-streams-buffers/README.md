# Aula 03: Streams e Buffers

![NodeJS](https://img.shields.io/badge/Node.js-v18%2B-green?style=for-the-badge&logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript)

Repositorio dedicado ao estudo, implementação e análise do comportamento de **Streams** e **Buffers** no **Node.js** para manipulação eficiente de dados em fluxo e controle de consumo de memória RAM.

O objetivo principal desta aula é compreender a geração progressiva de arquivos de log e o processamento assíncrono linha por linha sem sobrecarregar o *heap* da aplicação.

## Conteúdos e Módulos de Estudo

- [x] **Aula 03: Streams e Buffers no Node.js**
  - Geração de arquivos dinâmicos com *Writable Streams*.
  - Leitura e filtragem de logs linha por linha com *Readable Streams* e `readline`.
  - Monitoramento do consumo de memória RAM via `process.memoryUsage()`.

## Tecnologias, Módulos e Propriedades Utilizadas

- **Runtime:** [Node.js](https://nodejs.org/) (com suporte a ES Modules via `"type": "module"` no `package.json`).
- **Módulo `fs` (File System):**
  - `fs.createWriteStream()`: Criação do fluxo de escrita assíncrono.
  - `fs.createReadStream()`: Leitura do arquivo em pedaços (*chunks*).
  - Métodos da Stream: `.write()` para inserção de dados e `.end()` para fechamento do fluxo.

- **Módulo `readline`:**
  - `readline.createInterface()`: Leitura de dados linha a linha.
  - Propriedades de configuração: `input` (Stream Readable) e `crlfDelay: Infinity` (tratamento universal de quebras de linha).
  - Estrutura de iteração assíncrona: `for await...of`.

- **Monitoramento do Sistema:**
  - `process.memoryUsage()`: Leitura das propriedades `rss` e `heapUsed` para análise de eficiência em MB.
  
- **Manipulação de Dados:**
  - `Date.prototype.toISOString()` e `Date.prototype.toLocaleTimeString()` para marcação de data/hora nos logs.
  - `String.prototype.includes()` para filtragem de mensagens de erro.