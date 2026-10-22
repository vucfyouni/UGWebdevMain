# UG Web Development — Sites edition

Buildless HTML, CSS and JavaScript. `dist/` is the deployable website; `/pricing/` contains the pricing and estimate builder. No dependency installation or secrets required.

## Editing and hosting

Edit the files in `dist/`. Serve the directory using any static host. The `.openai/hosting.json` manifest binds this checkout to its private Sites deployment. Do not overwrite another Site's project ID.

## GitHub setup

The existing repository is https://github.com/vucfyouni/UGWebdevMain. This Sites edition is independent of the existing Next.js implementation. To keep it alongside that app, add this folder as `sites-static/` on a feature branch and open a pull request. Review before merging. Configure any static hosting provider with no build command and `sites-static/dist` as the publish directory. Sites hosting itself requires no GitHub setup; its managed Git source is separate.

## Behavior

Light/dark preference is saved locally. Estimates use the supplied business model ranges, with extra pages, expanded SEO, booking, e-commerce, rush delivery, and separate monthly care. The 40/30/30 payment schedule is illustrative. E-commerce is explicitly subject to custom scope and may exceed the upper estimate. The customer calculator does not expose internal margin calculations. The inquiry form opens an email draft to connor@vegas-underground.com; it does not automatically deliver email. Downloads are generated locally. Portfolio graphics are labeled representations, not screenshots.
