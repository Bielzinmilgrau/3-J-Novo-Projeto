async function quantidadeDeUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const resultado =  await fetch(url);
    const dados = await resultado.json();
    const nomeDaRedes = Object.keys(dados);
    const quantidadeDeUsuarios = Object.values(dados);

    const infos = [
        {
            x: nomeDaRedes,
            y: quantidadeDeUsuarios,
            type: 'bar'
        }
    ]
}