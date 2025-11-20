import type { Context } from 'hono'

import type { EchoRequest } from '../types/echo'

export const echoController = async (c: Context) => {
  
    // Importing the request body to ensure type safety and extensibility
  const RequestBody  = await c.req.json() as EchoRequest
  
  const message = RequestBody.message

    // Simulated 2 second delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return c.json({
    status: 'ok',
    echo: message,
  })
}
