SparkAI - Full Stack AI SaaS App
​
SparkAI is a complete full-stack AI-powered SaaS application built with the PERN stack (PostgreSQL, Express.js, React.js, Node.js). It offers premium AI tools for content generation, image editing, and resume analysis, with user authentication and subscription billing.
​
​
🌟 Key Features
User Authentication: Secure sign-up, sign-in, and profile management using Clerk.​
Subscription Billing: Free and premium plans; premium unlocks advanced AI features via Clerk billing.​
Dashboard: View creation history, manage plans, and access tools.
​

---AI Tools:

-Article Generator: Enter title and length for AI-generated articles.
-Blog Title Generator: Input keyword and category for title suggestions.
-Image Generator: Prompt-based images with styles (e.g., 3D) using AI.
-Background Remover: Upload image for transparent background.
-Object Remover: Describe and remove objects from images.
-Resume Analyzer: Upload resume for detailed AI analysis (strengths, weaknesses, improvements).
​​
🛠 ---Tech Stack-

| Component  | Technologies                                                                      |
| ---------- | --------------------------------------------------------------------------------- |
| Frontend   | React.js, Tailwind CSS, React Router, Lucide React, Clerkyoutube​github​            |
| Backend    | Node.js, Express.js                                                               |
| Database   | PostgreSQL (Neon serverless)                                                      |
| AI APIs    | Integrated for generation/removal (e.g., OpenAI, Clipdrop proxies)​                |
| Deployment | Vercel (frontend/backend)                                                         |


🚀 Quick Start
Clone the repo and install dependencies:

npm install
Set up environment variables (Clerk keys, Neon DB URL, AI API keys).
Run frontend: npm run dev (client).
Run backend: npm run dev (server).
Deploy to Vercel.
​
​
