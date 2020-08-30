# How to use `rocket-punch` on a `next` project

## 1. Create a project and install `rocket-punch`

```sh
npx create-next-app --example with-typescript my-project

cd my-project

yarn add rocket-punch --dev
```

## 2. Edit `tsconfig.json`

Add `compilerOptions.baseUrl` property

```json
{
  "compilerOptions": {
    "baseUrl": "."
  }
}
```

## 3. Edit `package.json`

Add scripts

```json
{
  "scripts": {
    "pack": "rocket-punch build --source-root .",
    "publish": "rocket-punch publish --source-root ."
  }
}
```

## 4. Create a sample package

```tsx
// sample-component/index.tsx
// `sample-component` is your package name
import React from "react";

interface Props {
  label: string;
}

export function Hi({ label }: Props) {
  return (
    <span role="img" aria-label={label}>
      👋
    </span>
  );
}
```

## 5. Create the `.packages.yaml`

```yaml
# listing your component `sample-component`
sample-component:
  version: 1.1.0
  module: esm
```

## 6. Build and publish

```sh
yarn run pack # or npx rocket-punch build
yarn run publish # or npx rocket-punch publish
```

## 7. Import your package to your App by absolute path

```diff
import Link from 'next/link'
import { Hi } from 'sample-component';
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
-    <h1>Hello Next.js 👋</h1>
+    <h1>Hello Next.js <Hi label="Hello Next.js"/></h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
```

---

# TypeScript Next.js example

This is a really simple project that shows the usage of Next.js with TypeScript.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript)

## How to use it?

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript with-typescript-app
# or
yarn create next-app --example with-typescript with-typescript-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/vercel/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/with-typescript
cd with-typescript
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

    npm install --save-dev typescript

To enable TypeScript's features, we install the type declarations for React and Node.

    npm install --save-dev @types/react @types/react-dom @types/node

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
