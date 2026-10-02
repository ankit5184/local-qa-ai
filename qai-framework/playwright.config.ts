import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

const requestedTimeout = Number(process.env.QAI_TEST_TIMEOUT_MS);
const testTimeout = Number.isFinite(requestedTimeout)
  ? Math.min(Math.max(requestedTimeout, 10_000), 180_000)
  : 60_000;

export default defineConfig({
  testDir: './tests',
  timeout: testTimeout,
  expect: { timeout: 10_000 },
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['allure-playwright', { outputFolder: 'allure-results', detail: false }]],
  use: { baseURL: process.env.QAI_BASE_URL, headless: process.env.QAI_HEADED !== 'true', screenshot: 'only-on-failure', trace: 'off', video: 'retain-on-failure' },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
