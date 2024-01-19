const http = require('node:http')

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
  } else {
    res.statusCode = 404 // Not Found
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>404: Not Found</h1>')
  }
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort} `)
})
