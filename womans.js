const express = require('express')
const route = express.Router()
const app = express()
const port = 3333

const womans = [
  {
    name:"Joy Assis",
    image:"https://github.com/JoyAssis.png",
    minibio:"Desenvolvedora Fullstack"
  },
  {
    name:"Joy Assis",
    image:"https://github.com/JoyAssis.png",
    minibio:"Desenvolvedora Fullstack"
  },
  {
    name:"Joy Assis",
    image:"https://github.com/JoyAssis.png",
    minibio:"Desenvolvedora Fullstack"
  }
]

function showList(request, response){
  response.json(womans)
}
function showPort(){
  console.log('Server running on port:', port)
}

app.use(route.get('/womans',showList))
app.listen(port,showPort)