# DodoPayments Assignment

A full-stack application demonstrating API queue management with rate limiting. The project consists of a Next.js frontend with an intelligent request queue system and a Hono backend API with rate limiting middleware.

## Project Structure

```
DodoPayments/
├── frontend-nextjs/     # Next.js frontend application
├── backend-hono/        # Hono backend API server
└── README.md           
```

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - for the frontend
- **Bun** (latest) - for the backend runtime
- **npm** or **yarn** - package manager

### Installation

#### 1. Frontend Setup

```bash
cd frontend-nextjs
npm install
```

#### 2. Backend Setup

```bash
cd backend-hono
bun install
```

### Environment Configuration

#### Frontend Environment Variables

Create a `.env.local` file in the `frontend-nextjs` directory:

```env
NEXT_PUBLIC_BACKEND_PROD_URL=`Your backend url`
```

**Note:** The backend is currently hosted at `https://dodo-payments-backend.vercel.app`. If you want to use your own backend instance, replace this URL with your backend's URL.

### Running the Application

#### Start the Backend (Terminal 1)

```bash
cd backend-hono
bun run dev
```

The backend will start on `http://localhost:3001`

#### Start the Frontend (Terminal 2)

```bash
cd frontend-nextjs
npm run dev
```

The frontend will start on `http://localhost:3000`

### Building for Production

#### Frontend

```bash
cd frontend-nextjs
npm run build
npm start
```

#### Backend

The backend is configured for deployment on Vercel. For local production builds, ensure you have Bun installed and configured.

## Features

### Queue System Features

The application implements a sophisticated in-memory queue system with the following features:

#### 1. **Sequential Processing**
   - Jobs are processed one at a time in FIFO (First In, First Out) order
   - Prevents overwhelming the backend API with concurrent requests

#### 2. **Automatic Rate Limit Handling at Frontend for retries**
   - Detects 429 (Too Many Requests) responses from the backend
   - Automatically pauses processing for 1 minute when rate limit is reached
   - Re-queues the failed job to the front of the queue for retry
   - Resumes processing after the cooldown period

#### 3. **Promise-Based API**
   - Each enqueued job returns a Promise
   - Allows for async/await pattern in your code
   - Proper error handling with reject/resolve

#### 4. **Job Management**
   - Each job has a unique ID for tracking
   - Users can enter a custom message as well
   - Success and error response handling

### Queue API

The queue system exposes the following functions:

```typescript
// Enqueue a new job
enqueue(message: string, id: string): Promise<any>

// Get current queue length
getQueueLength(): number

// Get the front job (next job to be processed)
getQueueFront(): Job | undefined
```

##  How It Works

### Backend Architecture

The backend is built with **Hono**, a fast web framework:

#### **Rate Limiting Middleware**
- **Limit:** 5 requests per minute per IP address
- **Window:** 60 seconds (1 minute)
- **Response:** Returns 429 status code with custom error message when limit is exceeded
- Uses `hono-rate-limiter` package for implementation

#### **Echo Endpoint**
- **Route:** `POST /echo`
- **Request Body:** `{ message: string }`
- **Response:** `{ status: 'ok', echo: message }`
- **Simulated Delay:** 2 seconds per request (simulates real-world API processing time)
- **CORS:** Enabled for cross-origin requests

#### **Server Configuration**
- Runs on port `3001` (configurable)
- Uses Bun runtime for optimal performance
- Global rate limiting applied to all routes

### Frontend Architecture

The frontend is built with **Next.js 16** and **React 19**:

#### **Queue Implementation** (`lib/queue.ts`)
- In-memory queue storage
- Global processing flag to prevent concurrent processing
- Automatic queue processing on job enqueue
- Rate limit synchronization with backend (5 requests/minute)
- Timestamp tracking for rate limit compliance

#### **Queue Processing Flow**
1. User enqueues a job via `enqueue(message, id)`
2. Job is added to the queue.
3. `processQueue()` is triggered automatically
4. If not already processing, the function starts processing jobs sequentially
5. For each job:
   - Makes POST request to `/echo` endpoint
   - If 429 error: re-queues job, waits 1 minute, continues
   - If success: resolves promise with response data
   - If error: rejects promise with error data
6. Processing continues until queue is empty

#### **Demo Page** (`/demo`)
- Interactive UI for testing the queue system
- Real-time queue status display
- Current processing job visualization
- Response log with success/error indicators
- Input field for custom messages

#### **Dashboard** (`/`)
- Payment dashboard UI with various cards:
  - My Cards
  - Recent Transactions
  - Spending Summary
  - My Subscriptions
  - Total Expenses
  - Exchange Rates
  - Credit Score

### Technology Stack

#### Frontend
- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Component primitives
- **Recharts** - Data visualization
- **Lucide React and Remix Icons** - Icons

#### Backend
- **Hono** - Web framework
- **Bun** - JavaScript runtime
- **TypeScript** - Type safety
- **hono-rate-limiter** - Rate limiting middleware

### How to run frontend locally

1. Set the environment variable `NEXT_PUBLIC_BACKEND_PROD_URL` in your deployment platform
2. Build and deploy using your preferred platform (Vercel, Netlify, etc.)

### Using Your Own Backend

If you want to host your own backend:

1. Deploy the `backend-hono` directory to your preferred platform
2. Update the `NEXT_PUBLIC_BACKEND_PROD_URL` environment variable in your frontend to point to your backend URL
3. Ensure CORS is properly configured (already enabled in the code)

##  API Reference

### POST /echo

Echoes back the message sent in the request.

**Request:**
```json
{
  "message": "Your message here"
}
```

**Success Response (200):**
```json
{
  "status": "ok",
  "echo": "Your message here"
}
```

**Rate Limit Response (429):**
```json
{
  "status": "error",
  "echo": "Rate Limit has been reached, please try again later."
}
```

## Rate Limiting

- **Limit:** 5 requests per minute per IP
- **Window:** 60 seconds
- **Behavior:** Returns 429 status code when limit exceeded
- **Frontend Handling:** Automatically retries after 1-minute cooldown

## Contributing

This is a demonstration project. Feel free to fork and modify as needed.

## License

This project is open source and available for educational purposes.

---

**Note:** Remember to set the `NEXT_PUBLIC_BACKEND_PROD_URL` environment variable in your frontend project. The default value points to the hosted backend at `https://dodo-payments-backend.vercel.app`, but you can replace it with your own backend URL if you're hosting your own instance.

