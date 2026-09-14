export function formatoLog(mensagem){
    const dataAtual = new Date()
    .toISOString().split('T')[0];

    const horaAtual = new Date()
    .toLocaleTimeString();

return(`[${dataAtual} ${horaAtual}]  - ${mensagem}`);

}