# Primary Playwright Framework

Managed Playwright TypeScript framework generated from a reviewed Test Case set and immutable application knowledge selected revision.

## Prerequisites

- Node.js 20 or newer
- Access to the authorized target application
- Runtime credentials supplied locally; no secrets are packaged

## One-command bootstrap

After extracting the archive, run:

```bash
npm install && npm run setup
```

Copy `.env.example` to `.env`, then set `QAI_BASE_URL`, `QAI_USERNAME`, and `QAI_PASSWORD`. The prefix prevents collisions with operating-system variables such as Windows `USERNAME`. Never commit `.env`.

## Run suites

- All: `npm test`
- Headed: `npm run test:headed`
- Debug: `npm run test:debug`
- Smoke: `npm run test:smoke`
- Sanity: `npm run test:sanity`
- Functional: `npm run test:functional`
- Regression: `npm run test:regression`
- E2e: `npm run test:e2e`

Only suites present in this immutable framework version are advertised. Every suite command maps to persisted Test Case tags, so it cannot finish with "No tests found" because of a missing tag.

## Allure reporting

1. Execute a suite.
2. Generate the report with `npm run report`.
3. Open it with `npm run report:open`.

Screenshots and videos are retained for failures. Playwright trace capture and detailed Allure action steps are disabled because they may serialize runtime credential values.

## Architecture

- `tests/`: concise executable specifications
- `pages/`: semantic Page Objects with observed locators
- `fixtures/`: typed Page Object lifecycle
- `data/`: environment-driven runtime test data
- `utils/`: shared runtime helpers
- `qai-manifest.json`: Test Case → workflow → state → evidence traceability

## Maintenance policy

Add only reviewed Playwright-backed Test Cases. Reuse semantic Page Objects and locators already grounded in repository evidence. Managed updates create immutable versions and require human review; user-edited files are protected by content hashes.
