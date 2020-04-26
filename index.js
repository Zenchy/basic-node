const http = require('http');

const colors = require('colors')

const handleServer = (req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'})
  res.write('<h1>Hello World from Nodjs!!!</h1>')
  res.end()
}

const server = http.createServer(handleServer)


server.listen(3000, () => console.log('Servidor en puerto 3000'.cyan))