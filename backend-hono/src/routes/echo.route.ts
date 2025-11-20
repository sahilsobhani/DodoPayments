import { Hono } from 'hono'
import { echoController } from '../controller/echo.controller'

const echoRoute = new Hono()

// POST /echo
echoRoute.post('/', echoController)

export default echoRoute
