const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
            nome: 'Fernanda Matiasi',
            imagem: 'https://avatars.githubusercontent.com/u/87779901?s=96&v=4',
            minibio: 'Desenvolvedora junior'
        }
    )
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)