const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Bienvenido a la página de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ contacto: 'Sofia Alejandra' }))
  } else if (req.url === '/imagen-super-bonita.png') {
    // Buffer
    fs.readFile('./placa.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Server Error')
      } else {
        // Aquí se envían datos binarios y con ayuda del header lo puede leer como imagen
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404 // Not Found
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>404: Not Found</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort} `)
})

// Para mantener el servidor actualizado de los cambios en el código (cuando estamos en desarrollo)
// node --watch http.js

// Segunda alternativa: nodemon
