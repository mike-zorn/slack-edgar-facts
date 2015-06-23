'use strict'

import server from './server'

server.listen(process.env.PORT || 0, err => {
  if (err) { process.emit('error', err) }
  console.log(`Listening on port: ${server.address().port}`)
})
