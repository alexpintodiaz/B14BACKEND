const express = require("express")
const posgradoDAO = require("../model/posgradosDAO")

const posgradoCtrl = {}

posgradoCtrl.listar = async() => {
    let posgrados = await posgradoDAO.find();
    return posgrados;
};

posgradoCtrl.insertar = async(posgrado) => {
    delete posgrado._id;
    return await posgradoDAO.create(posgrado);
};

posgradoCtrl.actualizar = async(posgrado) => {
    //let id = posgrado._id;
    //delete posgrado._id;
    return await posgradoDAO.findOneAndUpdate(posgrado._id, posgrado);
};

posgradoCtrl.eliminar = async(id) => {
    await posgradoDAO.deleteOne({
        _id: id
    });
};

module.exports = posgradoCtrl;