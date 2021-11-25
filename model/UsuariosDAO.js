const mongoose = require("../DB/conexionBD")

const usuarioSchema = mongoose.Schema({
    nombreUsuario: String,
    numeroContacto: String,
    email: String,
    posgradosDeInteres: [{
        idPosgrado: String,
        nombrePosgrado: String,
    }]
}, {
    Collection: "usuarios",
    versionKey: false
});

const usuarioDAO = mongoose.model('usuarios', usuarioSchema);

module.exports = usuarioDAO;