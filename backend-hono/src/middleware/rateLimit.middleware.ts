import { rateLimiter } from "hono-rate-limiter";

import type { MiddlewareHandler } from 'hono'
  
export const rateLimit: MiddlewareHandler = rateLimiter({
    windowMs: 1 * 60 * 1000, // 1 minute
    limit: 5, // Limit each IP to 5 requests per `window` (here, per 15 minutes).
    standardHeaders: "draft-6", 
    keyGenerator: (c) => c.req.header("x-forwarded-for") || "local",
    message: { status: 'error', echo: 'Rate Limit has been reached, please try again later.' }, //custom json messsage to be sent back
  })




