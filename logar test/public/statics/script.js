//funcoes cadastro
const nome = document.getElementById('input_nome')
const senha1 = document.getElementById('input_senha')
const senha2 = document.getElementById('input_senha2')
var msg = document.getElementById('txt_confirma')


function validaTudo() {

    if (nome.value == '' || senha1.value == '' || senha2.value == '' || senha1.value != senha2.value) {
        if (senha1.value != senha2.value) {
            msg.innerText = 'As senhas devem ser iguais'
        } else {
            msg.innerText = 'Preencha todos os campos!'
        }
    } else {
        msg.innerText = ''

        return true

    }
    return false
}

function alertaCor() {
    if (senha1.value != senha2.value || senha1.value == '' || senha2.value == '') {
        if (senha1.value == '' || senha2.value == '') {
            senha2.style.cssText = 'border-bottom: solid white 1px'
            senha2.style.color = 'white'
        } else {
            senha2.style.cssText = 'border-bottom: solid red 1px'
            senha2.style.color = 'red'
        }
    } else {
        senha2.style.cssText = 'border-bottom: solid dodgerblue 1px'
        senha2.style.color = 'dodgerblue'
    }
}







