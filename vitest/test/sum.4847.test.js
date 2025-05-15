
import sum4847 from '../sum4847.js';
import { expect, test } from 'vitest';

test('adds 52 + 56 to equal 108 + offset 0.7894360732374298', () => {
  expect(sum4847(52, 56)).toBe(108 + 0.7894360732374298);
});
