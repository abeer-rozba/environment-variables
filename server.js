require('dotenv').config() // imports environment variables, must be in top of application

const express = require('express')
const app = express()
const PORT = process.env.PORT
const SECRET_PASSWORD = process.env.SECRET_PASSWORD

app.get('/', (request, response) => {
  response.send("The server is running")
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Your secret password is ${SECRET_PASSWORD}`);
})