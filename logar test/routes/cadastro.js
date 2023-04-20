const express = require('express')
const fs = require('fs')
const router = express.Router()

// pagina 1
router.get('/', (req, res, next) => {
    res.render('cadastro', {
        alerta: ''
    });
})

router.get('/login', (req, res) => {
    res.render('login',{
        alerta: ''
    })
})

router.post('/login', (req, res) => {
    let nome = req.body.name
    let senha = req.body.senha
    let senha2 = req.body.senha2

    let dados = new Object()

    dados.name = nome
    dados.senha = senha
    dados.senha2 = senha2

    var msg = req.body.txt_confirma
    console.log(msg)
    if (nome == '' || senha == '' || senha2 == '' || senha != senha2) {
        if (senha != senha2) {


            // res.redirect('/')
        } else {


            // res.render('cadastro')
        }
    } else {
        fs.readFile('data.json', 'utf-8', (err, data) => {
            try {
                if (err) throw err
                let json = JSON.parse(data)
                JSON.stringify(dados)

                const getUserByName = json.users.find(
                    (a) => a.name == nome
                )

                

                // checa se o nome existe ou não
                if (getUserByName == undefined) {

                    json.users.push(dados)
                    console.log(dados, '-- Dados enviados!')

                    fs.writeFile('data.json', JSON.stringify(json), (error, res) => {
                        if (error) {
                            console.error(error)
                            return
                        }
                        console.log(res)
                    })

                    // pagina 2
                    res.render('login',{
                        alerta: ''
                    })

                } else {
                    res.render('cadastro', {
                        alerta: 'Usuário já existente'
                    });
                }

            } catch (err) {
                res.status(400).send({ error: err.message })
            }



        })
    }
})
// fim da execução



module.exports = router;