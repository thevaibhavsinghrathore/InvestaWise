InvestaWise

InvestaWise is a GenAI-powered financial assistant designed to bridge the financial literacy gap in India. It helps users make smarter investment decisions by answering basic investment queries and assisting in the discovery of suitable financial products tailored to their needs.

🚀 Features
📊 Conversational Financial Guidance
Understand investment basics through natural language interactions.

🔍 Product Discovery
Get recommendations on mutual funds, insurance, PPF, and more based on user goals and preferences.

🤖 GenAI-Powered Assistant
Built using state-of-the-art NLP models to provide contextual, reliable answers.

🌐 Localized Financial Knowledge
Tailored to address the unique financial needs and products of Indian users.

🧠 Smart Suggestions
Uses user input to personalize financial tips and resources.

🧩 Tech Stack
Frontend: React.js (Next.js)

Backend: Node.js with Express / Python FastAPI

AI: OpenAI / LLM API integration for NLP

Data: Financial product data from public and custom datasets

Deployment: Vercel / Render / AWS (TBD)

📁 Project Structure (Example)
bash
Copy
Edit
investawise/
├── client/                # Frontend (React)
├── server/                # Backend API
├── data/                  # Financial product datasets
├── models/                # LLM/AI modules
├── utils/                 # Helper functions
├── README.md              # Project info
└── .env                   # API keys and config
🧠 How It Works
User inputs a question like:
"How can I start investing with ₹5,000 per month?"

InvestaWise interprets the intent using LLMs and retrieves:

Educational info (e.g., SIPs, PPF, ELSS)

Product options based on goals

Pros/cons and next steps

Offers follow-up guidance:
"Would you like to explore tax-saving options too?"

