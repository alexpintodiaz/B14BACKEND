const { Schema } = require("mongoose");
const mongoose = require("../DB/conexionBD")

const universidadSchema = mongoose.Schema({
    nombreUniversidad: String,
    email: String
}, {
    Collection: "universidades",
    versionKey: false
});

const universidadDAO = mongoose.model('universidades', universidadSchema);

module.exports = universidadDAO;