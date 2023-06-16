var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmesStar'))
if (listaFilmes == null) {
    listaFilmes = []
}