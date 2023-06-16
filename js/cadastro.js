var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmesStar'))
if (listaFilmes == null) {
    listaFilmes = []
}

exibirFilmes()

function validarCadastro(filme, categoria, opiniao, link) {
    if (filme == '' || categoria == '' || opiniao == '' || link == '') {
        return false
    }
    else {
        return true
    }
}

function cadastrarMidia() {
    var nome = document.getElementById("nome").value
    var categoriaFilme = document.getElementById("categoria").value
    var opiniaoFilme = document.getElementById("opiniao").value
    var linkFilme = document.getElementById("link").value

    var cadastro = validarCadastro(nome, categoriaFilme, opiniaoFilme, linkFilme)
    if (cadastro == false) {
        alert("Verifique os dados antes de cadastrar")
        return
    }

    var objFilmes = {
        nome: nome,
        categoria: categoriaFilme,
        opiniao: opiniaoFilme,
        filme: linkFilme
    }
    listaFilmes.push(objFilmes)
    localStorage.setItem('bdFilmesStar', JSON.stringify(listaFilmes))
    alert("Filme Cadastrado")


    document.getElementById("nome").value = ''
    document.getElementById("categoria").value = ''
    document.getElementById("opiniao").value = ''
    document.getElementById("link").value = ''

    location.href = "filmes.html"
}


function exibirFilmes() {
    document.getElementById("filmesAdd").innerHTML = ""

    for (var i in listaFilmes) {
        document.getElementById("filmesAdd").innerHTML +=
            `
      <img src="${listaFilmes[i].filme}" class="filmesAdd">
    `
    }
}

function excluirFilme(){

}
