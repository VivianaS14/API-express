const userJSON = require('./users/users.json')
const express = require('express')

const app = express()
app.disable('x-powered-by')

// MIDDLEWARE
app.use(express.json())

// app.use((req, res, next) => {
//   console.log('Mi primer middleware')
//   // tracker la request a la base de datos
//   // revisar si el usuario tiene cookies

//   // Ej: El middleware puede hacer esta lógica y puede ser reutilizable para otras peticiones
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     // Importante usar el 'next' para seguir con la request
//     next()
//   })
// })

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
  res.status(201).json(req.body)
})

// 404 Not Found -> importante que siempre sea el ultimo
// Caso de uso para todos los métodos
// La ultima a la que va a llegar
app.use((req, res) => {
  res.status(404).send('404: Not Found')
})

// Donde el servidor escucha
app.listen(1234, () => {
  console.log('Server listening on port http://localhost:1234')
})
