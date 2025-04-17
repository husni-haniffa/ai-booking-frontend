# Le Luxe - AI Booking System Frontend

## Overview
Le Luxe is an AI-powered hotel booking system featuring natural language search capabilities using RAG (Retrieval-Augmented Generation) concepts. Users can search for hotels using natural language queries like "I want hotels in Italy with a rooftop" and get relevant filtered results.

## Features
- Natural language hotel search
- User authentication via Clerk
- Booking management
- Hotel browsing and filtering

## Setup and Installation

### Prerequisites
- A Clerk account with a React JS project configured
- Backend API running (see backend repository)
- Node.js and npm installed

### Installation Steps
1. Clone the repository:
```
git clone https://github.com/Husnixix/ai-booking-frontend.git
cd ai-booking-frontend
```

2. Install dependencies:
```
npm install
```

3. Create a `.env` file in the root directory with the following:
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. Start the development server:
```
npm run dev
```

## Environment Variables
- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key for authentication

## Third-Party Services
- **Clerk Authentication**: Sign up and create a project at [https://clerk.com/docs](https://clerk.com/docs)

## API Integration
This frontend connects to the Le Luxe backend API. Make sure to set up the backend server as well:
[Le Luxe Backend Repository](https://github.com/Husnixix/ai-shortlisting-backend.git)
