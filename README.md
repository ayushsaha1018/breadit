# Breadit - A Modern Fullstack Reddit Clone

A full-stack modern reddit clone that allows users to create, manage and post subreddits. It leverages the Next.js 14 App Router, React, Tailwind, Prisma, MySQL, TypeScript and other technologies.

## Key Features

- **Shadcn UI**: The app utilizes the Shadcn UI for a sleek and intuitive interface.
- **NextAuth Authentication**: NextAuth for secure user authentication and authorization using google.
- **React Query**: Utilizies React Query for moderm data fetching and infinite scrolling for dynamically loading posts.
- **Redis**: Advanced caching using [Upstash Redis](https://upstash.com/)
- **Edgestore**: Image uploads & link previews
- Optimistic updates for a great user experience
- A beautiful and highly functional post editor
- Full comment functionality with nested replies
- Upvote and downvote reddits

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/ayushsaha1018/ecommerce-admin.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
// mysql database
DATABASE_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

REDIS_URL=
REDIS_SECRET=
```

### Connect to Database and Push Prisma
```shell
npx prisma generate
npx prisma db push
```


### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
