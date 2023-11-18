const express = require('express')
const route = express.Router()
const app = express()
const port = 3333

function mostraHora(request, response) {

  const data = new Date()
 
  const hora = data.toLocaleTimeString('pt-BR')
 
  response.send(hora)
 
 }

function showPort(){
  console.log('Server running on port:', port)
}

app.use(route.get('/clock',mostraHora))
app.listen(port,showPort)