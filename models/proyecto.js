const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: [true, 'El número debe ser único']
    },
    // TODO: resto de atributos
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    }
    // TODO: resto de objetos tipo Modelo
});

module.exports = model('Proyecto', ProyectoSchema);
/*
{
    "numero": "",
    "cliente": {
        _id: ""
    },
    "tipoProyecto": {
        _id: ""
    }
}*/