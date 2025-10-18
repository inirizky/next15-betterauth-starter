# Next.js 15 Auth Starter (better-auth, Prisma, MongoDB)

A modern, opinionated starter template for building full-stack applications with Next.js 15. This starter comes pre-configured with a complete authentication system powered by **`better-auth`**, database management with **Prisma ORM**, a **MongoDB** database, and beautiful, accessible UI components from **Shadcn/ui**.

## ✨ Features

- 🔐 Authentication powered by **Better Auth**
- 🧠 Type-safe database access using **Prisma**
- 🪶 Styled components with **shadcn/ui**
- 🌙 Fully compatible with **Next.js 15 App Router**
- 🧰 Built with **TypeScript** for robust type safety
- ⚡ Ready-to-extend structure for your next app

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### 1. Prerequisites

* [Node.js](https://nodejs.org/) (v18 or later recommended)
* [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account or a local MongoDB instance.

### 2. Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/inirizky/next15-betterauth-starter.git](https://github.com/inirizky/next15-betterauth-starter.git)
    cd next15-betterauth-starter
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add the following variables. See `.env.example` for a template.

    ```env
    # Get this from your MongoDB Atlas cluster
    DATABASE_URL="mongodb+srv://<user>:<password>@<cluster-url>/<db-name>?retryWrites=true&w=majority"

    # A secret for better-auth (used for JWT/session encryption)
    # Generate one here: [https://generate-secret.vercel.app/](https://generate-secret.vercel.app/)
    BETTER_AUTH_SECRET=""
    BETTER_AUTH_URL=""
    GITHUB_CLIENT_ID=""
    GITHUB_CLIENT_SECRET=""
    ```

4.  **Push the database schema:**
    This command will sync your Prisma schema with your MongoDB database, creating the necessary collections (`User`, `Session`, `VerificationToken`).

    ```bash
    npx prisma generate
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the running application.
