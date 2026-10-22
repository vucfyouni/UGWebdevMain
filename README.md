# UG Web Development

Next.js + TypeScript site for UG Web Development, with a portfolio, package pricing, and an interactive estimate builder.

## Development

Use Node.js 24 LTS and npm. From this directory:

```sh
npm ci --cache /workspace/.npm-cache
npm run dev
```

## Validation and production

```sh
npm run typecheck
npm run build
npm start
```

Pages: `/`, `/work`, `/pricing`, `/contact`. The estimate builder opens an email draft addressed to connor@vegas-underground.com; there is no form backend, payment collection, or automatic email delivery. Prices are provisional ranges from the business model. Monthly fees are separate. Portfolio artwork is explicitly labeled as conceptual, not a screenshot. Replace it with approved real project imagery when available.

## GitHub and deployment

No secrets are required. Review and commit the initial files, then push the current branch to GitHub and open a pull request. Import the repository into Vercel using the Next.js preset; the root directory is the repository root, build command is `npm run build`, and dependencies install with `npm ci`. Each pull request can receive a deployment preview. Add a custom domain after its name and ownership are confirmed. External Google Fonts are optional; system fonts provide fallbacks.

No changes have been pushed or deployed automatically. Confirm public pricing, portfolio presentation, and contact details before launch.
