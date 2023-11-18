const express = require('express')
const app = express()
const port = 3333

function showPort(){
  console.log('Servere running on port:', port)
}

app.listen(port,showPort)