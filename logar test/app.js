const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
const exp = require('constants')

// caminho das rotas
const cadastro = require('./routes/cadastro')
const login = require('./routes/login')
const port = 3000
const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// front
app.set('views/layouts', path.join(__dirname, 'views/layouts'))
app.set('view engine', 'ejs')


// arquivo estatico: css, js
app.use(express.static(path.join(__dirname, 'public')))


// rotas pagina 1
app.get('/', cadastro)
app.get('/login', cadastro)
app.post('/login', cadastro)

// rotas pagina 2
app.post('/welcome', login)
app.get('/welcome/:name', login)






app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})