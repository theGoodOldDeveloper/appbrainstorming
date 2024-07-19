## PROLOG

#### make no mistake

npx create-next-app@14.0.2
npm install --save-exact @nextui-org/react@2.2.9 framer-motion

#### after i open tailwind.config.ts & insert

import{ nextui } from '@nextui-org/react'

#### then inside of this content array add anoter entry

`'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'`

#### & bottom insert

`  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config`

### 🙂 make PROVIDERS

In React, a provider is a component that allows you to pass data down the component tree without having to pass props down manually at every level. Providers are typically used in combination with the Context API in React to manage state at a higher level and make it accessible to multiple components without prop drilling.

By using a provider, you can wrap your component tree with a provider component and specify the data or state you want to make available to the components within that tree. This data can then be accessed by any component within the provider's subtree without explicitly passing it down as props.

Overall, providers in React help in managing global state and sharing data between components efficiently.

#### code

"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
return <NextUIProvider>{children}</NextUIProvider>;
}

### 🙂 setup files

#### & add /src/app/layout.tsx & modify return

import Providers from "@/app/providers";
/_ //INFO: Wrap the children with the Providers component _/

#### & remove all line in /src/app/global.css exept

@tailwind base;
@tailwind components;
@tailwind utilities;

### 🙂 install prisma

npm install prisma

### 🙂 initial prisma project

npx prisma init --datasource-provider sqlite

### 🙂 replace in prisma folder the schema.prisma

(before download)

### 🙂 create database

npx prisma migrate dev
name: pl init

#### create /db folder in /src

#### create index.ts file folder in /db

import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();

## SETUP OAuth

https://github.com/settings/applications/new
DEV Brainstorming
http://localhost:3000/

#### Authorization callback URL

http://localhost:3000/api/auth/callback/github
OK send

#### Generate a new client secret

### 🙂 install these packages

npm install --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

#### create:

/src/auth.ts
