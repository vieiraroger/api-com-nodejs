'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var livroSchema = Schema({
    titulo: {
        type: String
    },
    autor: {
        type: String
    }
})

module.exports = mongoose.model('livro', livroSchema)