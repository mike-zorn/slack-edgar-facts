'use strict'

import nock from 'nock'
import { request } from 'http'
import test from 'tape'

const TOKEN = 'foo'
const WEBHOOK_URL_FRAG = 'bar'

let port
let server

test('setup', t => {
  t.plan(2)

  process.env.TOKENS_URLS = `{
    "${TOKEN}":"https://hooks.slack.com/services/${WEBHOOK_URL_FRAG}"
  }`
  server = require('./server')
  server.listen(0, err => {
    t.error(err)
    t.ok(port = server.address().port)
  })
})

test('should send to slack channel', t => {
  t.plan(3)

  nock('https://hooks.slack.com:443')
    .post(
      `/services/${WEBHOOK_URL_FRAG}`,
      body => {
        t.equal(body.channel, '#robots')
        t.ok(body.text)
        return true
      }
    )
    .reply(200, 'ok')
  nock.enableNetConnect(`localhost:${port}`)

  const req = request(
    {
      method: 'POST',
      port: port
    },
    res => {
      t.equal(res.statusCode, 200)
    }
  )

  req.write(`token=${TOKEN}&channel_name=robots`)
  req.end()

})

test('teardown', t => {
  t.plan(1)
  server.close(err => {
    t.error(err)
  })
})
