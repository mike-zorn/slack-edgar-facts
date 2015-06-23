import { createServer } from 'http'
import edgarFacts from 'edgar-facts'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end(edgarFacts())
})

server.listen(process.env.PORT || 0, err => {
  if (err) { process.emit('error', err) }
  console.log(`Listening on port: ${server.address().port}`)
})
