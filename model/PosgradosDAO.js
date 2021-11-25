const mongoose = require("../DB/conexionBD")

const posgradosSchema = mongoose.Schema({
    nombrePosgrado: String,
    universidad: [{
        idUniversidad: String,
        nombreUniversidad: String
    }],
    materias: [{
        nombreMateria: String,
        intensidadHoraria: String,
        descripcion: String
    }]
}, {
    Collection: "Posgrados",
    versionKey: false
});

const posgradosDAO = mongoose.model('posgrados', posgradosSchema);

module.exports = posgradosDAO;