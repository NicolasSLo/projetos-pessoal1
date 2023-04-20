const express = require('express')
const fs = require('fs')
const router = express.Router()


router.post('/welcome', (req, res) => {
    let nome = req.body.login_name
    let senha = req.body.login_senha

    if (nome == '' || senha == '') {

        res.render('login', {
            alerta: 'Preencha todos os campos!'
        });

    } else {

        fs.readFile('data.json', 'utf-8', (err, data) => {
            try {
                if (err) throw err

                let json = JSON.parse(data)

                const getUser = json.users.find(
                    (a) => a.name == nome
                )



                if (getUser == undefined) {

                    res.render('login', {
                        alerta: 'Usuário não existente!'
                    });

                } else {

                    if (nome === getUser.name && senha === getUser.senha) {
                        res.render('welcome', {
                            nome: getUser.name
                        })
                    } else {

                        res.render('login', {
                            alerta: 'Dados incorretos!'
                        });

                    }

                }
            } catch (err) {
                res.status(400).send({ error: err.message })
            }
        })
    }
})

// deletar usuario
router.get('/welcome/:name', (req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        try {
            if (err) throw err

            const json = JSON.parse(data)
            const deleteUser = json.users.filter(
                (user) => user.name != req.params.name
            )

            json.users = deleteUser
            console.log(json)

            fs.writeFile('data.json', JSON.stringify(json), (err) => {
                if (err) {
                    res.status(400).send({ error: err.message })
                } else {
                    res.end()
                }
            })

            res.redirect('/login')

        } catch (err) {
            res.status(400).send({ error: err.message })
        }
    })
})









module.exports = router;