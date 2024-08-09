const express = require('express')
const app = express()

// importar conexion a mongoDB
const archivoBD = require('./conexion')

app.get('/', (req, res) =>{
    res.end('Bienvenidos al servidor backend Node.JS. Corriendo....node ya ' )
})

// configurar server basico
app.listen(5000, function(){
    console.log('El servidor NODE  esta corriendio correctamente')
})
