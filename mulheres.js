const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Fernanda Matiasi',
        imagem: 'https://avatars.githubusercontent.com/u/87779901?s=96&v=4',
        minibio: 'Desenvolvedora junior'
    },
    {
        nome: 'Ana Luiza',
        imagem: 'https://avatars.githubusercontent.com/u/87779901?s=96&v=4',
        minibio: 'Desenvolvedora junior'
    },
    {
        nome: 'Byanca Costa',
        imagem: 'https://avatars.githubusercontent.com/u/87779901?s=96&v=4',
        minibio: 'Desenvolvedora junior'
    }
]

function mostraMulheres(request, response){
        response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)