Aula 14: Servidor Edge e Runtime Edge

📚 Sobre a Aula

Na Aula 14 foi desenvolvido um exemplo de aplicação utilizando Servidor Edge e Runtime Edge.

O objetivo principal foi compreender como uma função pode ser executada em um ambiente de borda de rede, além de observar informações relacionadas à execução da função, como horário, região e tempo de processamento.

Durante a aula, foi criado um servidor utilizando TypeScript, com uma função handler responsável por receber uma requisição e retornar uma resposta no formato JSON.

🔹 Edge Runtime

O Edge Runtime permite que funções sejam executadas em servidores distribuídos, geralmente mais próximos do usuário. Isso pode ajudar a diminuir o tempo de resposta das aplicações.

Na atividade, o runtime foi configurado da seguinte forma:

export const config = {
    runtime: 'edge',
};

Essa configuração indica que a função deve ser executada utilizando o ambiente Edge.

🔹 Request e Response

Na função handler, foi utilizada uma requisição HTTP através do parâmetro req:

export default async function handler(req: Request) {

A função recebe a requisição e retorna uma nova resposta utilizando Response.

O retorno é enviado no formato JSON, facilitando a comunicação entre o servidor e o cliente.

🔹 Informações retornadas

A resposta da função apresenta algumas informações sobre sua execução:

Mensagem: informa que a função foi executada na borda de rede;
Horário: mostra a data e hora em que a função foi executada;
Região: identifica a região configurada para a execução;
Tempo de execução: mostra quanto tempo a função levou para ser executada.
🔹 Cálculo do tempo de execução

Para calcular o tempo que a função levou para executar, foi registrado o horário inicial:

const inicio = new Date();

Depois, o tempo de execução foi calculado comparando o horário atual com o horário inicial:

`${Date.now() - inicio.getTime()}ms`

Dessa forma, é possível visualizar o tempo aproximado de processamento da função em milissegundos.

🔹 Cabeçalhos da Response

Também foi configurado o cabeçalho da resposta para indicar que os dados enviados estão no formato JSON:

headers: {
    'content-type': 'application/json',
}

Isso informa ao cliente que o conteúdo da resposta deve ser interpretado como JSON.

🔹 Arquivos da Aula

O principal arquivo desenvolvido durante a aula foi:

api/
└── hora-servidor.ts

O arquivo hora-servidor.ts contém a configuração do Edge Runtime e a função responsável por processar a requisição e retornar as informações do servidor.

🛠️ Tecnologias e Ferramentas
Linguagem: TypeScript
Runtime: Node.js
Ambiente de execução: Edge Runtime
Formato de resposta: JSON
Controle de Versão: Git e GitHub
Editor: Visual Studio Code
🎯 Objetivos da Aula
Compreender o conceito de Edge Runtime;
Criar uma função para processamento de requisições HTTP;
Trabalhar com Request e Response;
Retornar informações utilizando JSON;
Configurar cabeçalhos HTTP;
Calcular o tempo de execução de uma função;
Compreender o funcionamento básico de servidores executados na borda da rede.