# AI Medical Voice App

An AI-powered medical consultation platform that helps users describe symptoms and receive doctor recommendations using voice and text input.

## Features

- **Voice & Text Consultation**: Describe symptoms through voice or text
- **AI-Powered Analysis**: OpenAI integration for intelligent symptom analysis
- **Doctor Recommendations**: Get personalized doctor suggestions based on symptoms
- **User Authentication**: Secure authentication with Clerk
- **Credit System**: Manage consultation credits with paid/free tiers
- **Consultation History**: Track past consultations and recommendations
- **Responsive Design**: Modern UI with Tailwind CSS and Radix UI components

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Authentication**: Clerk
- **Database**: Neon PostgreSQL with Drizzle ORM
- **AI**: OpenAI API
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, Lucide Icons, Tabler Icons
- **Animations**: Motion (Framer Motion)

VCare is an AI-powered voice assistant designed to help medical professionals streamline documentation, improve workflow efficiency, and manage patient interactions using real-time speech recognition.

### Prerequisites

- Node.js 20+
- npm/yarn/pnpm/bun
- Neon PostgreSQL database
- Clerk account
- OpenAI API key

### Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_neon_database_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
OPENAI_API_KEY=your_openai_api_key
```

### Installation

```bash
npm install
```

### Database Setup

```bash
npm run db:push
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
app/
├── (auth)/           # Authentication pages
├── (landing)/        # Landing page
├── dashboard/        # User dashboard
├── medicalAssistant/ # Consultation interface
├── api/              # API routes
├── _components/      # Shared components
└── context/          # React context providers

config/
├── db.tsx            # Database configuration
├── schema.tsx        # Database schema
└── openAiModel.tsx   # OpenAI configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## License

Private
