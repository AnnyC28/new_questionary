const url = 'https://raw.githubusercontent.com/AnnyC28/3btop_Musicas/refs/heads/main/top_musicas-BR'

async function visualizaInfo() {
    const res = await fetch(url)
    const dados = await res.json()

    const musica = Object.keys(dados)
    const musicaMaisVotada = musica[0]
    const votos = Object.values(dados)[0]

    let paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = `Nessa pesquisa, buscou se compreender qual a música favorita dos brasileiros que gostam de ouvir uma boa playlist em uma tarde de domingo. A ${musicaMaisVotada} foi a musica mais votada entre todas, com um total de ${votos} votos, em uma pesquisa que teve um total de um milhão de participantes`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)
}

visualizaInfo()