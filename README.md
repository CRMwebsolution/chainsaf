# ChainSaf website concept

A focused replacement website built with Next.js 16.3.8, React 19.3, TypeScript, and plain CSS. The homepage uses the App Router. Mobile navigation, inquiry drafts, and the product-video dialog use small React client components; the product content renders on the server.

## Local development

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

For production validation:

```sh
npm run typecheck
npm run build
npm start
```

## Vercel

Import `CRMwebsolution/chainsaf` and deploy `main` from the repository root. `vercel.json` selects Next.js, runs `npm ci` and `npm run build`, and uses the standard `.next` output. Leave Root Directory empty. The actual homepage is `app/page.tsx`, with assets in `public/assets`.

No environment variables or external services are required. The old static `dist` folder and unrelated preview-hosting manifest have been removed from this repository.

## Scope

This is an independent concept. The inquiry form prepares an email draft in the visitor’s browser; it does not send inquiries or automated replies. The owner must confirm product dimensions, working load limits, prices, shipping details, and contact details before an official launch. See `LAUNCH-NOTES.md`.
