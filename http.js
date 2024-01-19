const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
  console.log('Request received ', req.method)
  res.end('Hola mundo')
})

server.listen(desiredPort, () => {
  console.log(`Server listening on port http://localhost:${desiredPort} `)
})
