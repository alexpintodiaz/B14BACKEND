/* const { request, response } = require("express");
const express = require("express");

const app = express();
app.use(express.json());

let personas = [{
    cc: 10,
    nombre: "Luis Alberto",
    apellido: "Triana Trilos",
    edad: 33,
    estadoCivil: "soltero"
}, {
    cc: 20,
    nombre: "Luna Maria",
    apellido: "Hernandez Lara",
    edad: 22,
    estadoCivil: "casada"
}, {
    cc: 30,
    nombre: "Manuel Jesus",
    apellido: "Rubio Gomez",
    edad: 45,
    estadoCivil: "Union Libre"
}, {
    cc: 40,
    nombre: "Lina Maria",
    apellido: "Perez Gil",
    edad: 19,
    estadoCivil: "soltero"
}];

app.get('/', (request, response) => {
    response.send("<h1> Hola a todos <h1/>");
});

app.get('/api/personas', (request, response) => {
    response.status(201).json(personas);
});

app.post('/api/personas', (request, response) => {
    const persona = request.body;
    console.log(persona);
    response.status(200).json(persona);
    personas.push(persona);
    console.log(personas);
});

app.post('/api/personas', (request, response) => {
    const persona = request.body;
    let existe = false;
    console.log("Personas en BD: " + personas.length);
    for (let i = 0; i < personas.length; i++) {

        if (persona.cc == personas[i].cc) {
            console.log("La persona con cc: " + persona.cc + ", existe, se actualiza el registro ");
            personas[i] = persona;
            response.status(200).json(persona);
            existe = true;
            i = personas.length;
        }
    }
    if (!existe) {
        console.log("Se crea un nuevo registro con cc: " + persona.cc);
        personas.push(persona);
        response.status(201).json(persona);
    }
});

app.delete('api/personas:id', (request, response) => {
    let persona = request.body;
    console.log(persona.cc);
    let existe = false;
    for (let i = 0; i < personas.length; i++) {

        if (persona.cc == personas[i].cc) {
            console.log("La persona con cc: " + persona.cc + ", será eliminada");
            personas.splice(i, 1);
            response.status(200).json(persona);
            i = personas.length;
            existe = true;
        }
    }
    if (!existe) {
        response.status(404).send("Persona no existe, no se puede borrar");
    }
});

app.listen(3000, () => {
    console.log('Server corriendo');
}) */