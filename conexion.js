const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');


const objetobd = mongoose.Connection

objetobd.on('connected',()=>{console.log('conexion correcta a mongoDB')})
objetobd.on('error',()=>{console.log('error en la conexion a mongoDB')})

module.exports = mongoose
