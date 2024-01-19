const http = require('node:http')

const usersJSON = require('./users/users.json')

const server = http.createServer((req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/users':
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify(usersJSON))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }

    case 'POST':
      switch (url) {
        case '/newUser': {
          let body = ''

          // Escuchar el evento data donde esta el body del request
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a una base de datos para guardar la info
            // escribir headers
            res.writeHead(201, { 'Content-Type': 'application/json; charset=utf-8' })
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
      break

    default:
      break
  }
})

server.listen(1234, () => {
  console.log('Server listening on http://localhost:1234')
})
