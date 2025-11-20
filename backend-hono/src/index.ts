import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import echoRoute from './routes/echo.route'
import { rateLimit } from './middleware/rateLimit.middleware'

const app = new Hono()

app.use('*', prettyJSON())
  // apple rate limiting middleware globally
app.use('*', rateLimit)

  // Register echo route
app.route('/echo', echoRoute)

export default app
