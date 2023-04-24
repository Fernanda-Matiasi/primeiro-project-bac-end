const mongoose = new require('mongoose')

const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        requerid: true
    },
    imagem: {
        type: String,
        requerid: true
    },
    citacao: {
        type: String,
        requerid: true
    },
    minibio: {
        type: String,
        requerid: true
    }
})

module.exports = mongoose.model('diva', MulherSchema)