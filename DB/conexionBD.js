const mongoose = require("mongoose");

const url = "mongodb+srv://MarthaJ:Grupo5@cluster0.o6grr.mongodb.net/B14G05?retryWrites=true&w=majority";
// const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(url).then(() => console.log('CONECTADO A MONGO'))
    .catch((error) => console.log("La conexión fallo:" + error))

module.exports = mongoose;