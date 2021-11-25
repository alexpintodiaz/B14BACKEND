const express = require("express")
const usuarioDAO = require("../model/usuariosDAO")

const usuarioCtrl = {}

usuarioCtrl.listar = async() => {
    let usuarios = await usuarioDAO.find();
    return usuarios;
};

usuarioCtrl.insertar = async(usuario) => {
    delete usuario._id;
    return await usuarioDAO.create(usuario);
};

usuarioCtrl.actualizar = async(usuario) => {
    //let id = usuario._id;
    //delete usuario._id;
    return await usuarioDAO.findOneAndUpdate(usuario._id, usuario);
};

usuarioCtrl.eliminar = async(id) => {
    await usuarioDAO.deleteOne({
        _id: id
    });
};

module.exports = usuarioCtrl;