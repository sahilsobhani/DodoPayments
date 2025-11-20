import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { cors } from 'hono/cors'

import { rateLimit } from './middleware/rateLimit.middleware'


import echoRoute from './routes/echo.route'


const app = new Hono()
app.use('*', cors())

app.use('*', prettyJSON())
  // apple rate limiting middleware globally
app.use('*', rateLimit)


  // Register echo route
app.route('/echo', echoRoute)

export default { 
  port: 3001, 
  fetch: app.fetch, 
} 
