const express = require('express')
const route = express.Router()
const app = express()
const port = 3333

function helloWorld(request, response){
  response.send('Hello World!')
}
function showPort(){
  console.log('Server running on port:', port)
}

app.use(route.get('/ola',helloWorld))
app.listen(port,showPort)