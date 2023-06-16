var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdListaUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
console.log(listaUsuarios);

function validarCadastro(nomeUsuario, email, senha, confSenha) {
    if (nomeUsuario == '' || email == '' || senha == '' || confSenha == '') {
        alert('Verifique os dados cadastrados. Não pode ter campos vazio.')
        return false
    }

    if (senha != confSenha) {
        alert('As suas senhas não conferem.')
        return false
    }
    else {
        return true
    }
}

function botaoCadastro() {


    var nomeUsuario = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var confSenha = document.getElementById("confSenha").value

    var possoCadastrar = validarCadastro(nomeUsuario, email, senha, confSenha)
    if (possoCadastrar == false) {
        return
    }

    var objUsuario = {
        nome: nomeUsuario,
        email: email,
        senha: senha
    }
    listaUsuarios.push(objUsuario)
    localStorage.setItem('bdListaUsuarios', JSON.stringify(listaUsuarios))


    document.getElementById("nome").value = ''
    document.getElementById("email").value = ''
    document.getElementById("senha").value = ''
    document.getElementById("confSenha").value = ''


    alert('Usuário cadastro com sucesso')
    location.href = 'login.html'

}


function botaoCadastrese() {
    location.href = 'usuario.html'
}

function botaoLogin(){
    var usuario = document.getElementById("Login").value
    var senha = document.getElementById("senha").value

    var encontrou = false
    listaUsuarios.forEach(item => {
        if (usuario == item.email && senha == item.senha) {
            alert(`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    })

    if (encontrou == false) {

        alert('Usuário não encontrado')
    }
    
    else {
        location.href = 'filmes.html'
    }

}