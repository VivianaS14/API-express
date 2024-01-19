const userJSON = require('./users/users.json')
const express = require('express')
const app = express()

app.disable('x-powered-by')

// Express maneja por rutas
// Cuando la app recibe un GET ('url', callback con la response)
app.get('/', (req, res) => {
  //   res.status(200).send('Mi pagina API')

  // Express facilita el envió de datos
  res.json({ message: 'Hola Mundo' })
})

app.get('/users', (req, res) => {
  res.json(userJSON)
})

app.post('/user', (req, res) => {
  let body = ''

  // Escuchar el evento data donde esta el body del request
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // llamar a una base de datos para guardar la info
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

// 404 Not Found -> importante que siempre sea el ultimo
// Caso de uso para todos los métodos
app.use((req, res) => {
  res.status(404).send('404: Not Found')
})

// Donde el servidor escucha
app.listen(1234, () => {
  console.log('Server listening on port http://localhost:1234')
})
