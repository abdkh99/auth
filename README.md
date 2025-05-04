# Next.js Authentication System

A modern authentication system built with Next.js 14, NextAuth.js, Prisma, and Tailwind CSS.

## Features

- User registration and login
- Protected routes
- User dashboard
- Session management
- Modern UI with Tailwind CSS
- TypeScript support
- SQLite database with Prisma ORM

## Prerequisites

- Node.js 18+ and npm

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd auth-system
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

4. Initialize the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `/src/app` - Next.js application routes and API endpoints
- `/src/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/src/components` - Reusable React components

## Available Routes

- `/` - Home page with links to login and registration
- `/login` - User login page
- `/register` - User registration page
- `/dashboard` - Protected dashboard page (requires authentication)

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
