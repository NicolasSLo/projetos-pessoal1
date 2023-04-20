const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemacadastro', 'root', 'Osu727Marreko.', {
  host: "localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(() => {
  console.log('Conecta com sucesso no BD!')
}).catch((error) => {
  console.log('Falha ao se conectar: '+error)
})

//Database
const User = sequelize.define('users',{
    nome:{
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.TEXT
    },
    senha2:{
        type: Sequelize.TEXT
    }
})

//comando para criar database
//User.sync({force: true})


User.create({
    nome: 'User Test',
    senha: 'teste',
    senha2: 'teste'
})