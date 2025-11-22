import { rateLimiter } from "hono-rate-limiter";
import { getConnInfo } from "hono/vercel";
import type { Context } from 'hono'

// Function to extract the client's IP address from the request contexts
function getClientIP(c: Context ) {
  const info = getConnInfo(c);

  return (
    info.remote?.address ||
    c.req.header("x-vercel-forwarded-for") ||
    c.req.header("x-vercel-proxy-ip") ||
    c.req.header("cf-connecting-ip") ||
    c.req.header("x-real-ip") ||
    c.req.header("x-forwarded-for")?.split(",")[0].trim() ||
    "local"
  );
}

// Rate limiting middleware configuration
export const rateLimit = rateLimiter({
  windowMs: 60_000,
  limit: 5,
  standardHeaders: "draft-6",
  keyGenerator: (c) => getClientIP(c),
  message: {
    status: "error",
    echo: "Rate Limit has been reached, please try again later.",
  },
});
