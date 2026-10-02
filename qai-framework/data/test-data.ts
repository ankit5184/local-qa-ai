import { requireRuntimeValue } from '../utils/runtime';

export const environment = {
  get baseUrl(): string { return requireRuntimeValue('QAI_BASE_URL'); },
};

export const testUsers = {
  primary: {
    get username(): string { return requireRuntimeValue('QAI_USERNAME'); },
    get password(): string { return requireRuntimeValue('QAI_PASSWORD'); },
  },
};

export const testData = {
  get defaultValue(): string { return process.env.QAI_TEST_DATA || ''; },
};
