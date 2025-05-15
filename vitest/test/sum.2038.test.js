
import sum2038 from '../sum2038.js';
import { expect, test } from 'vitest';

test('adds 78 + 77 to equal 155 + offset 0.6749329121166023', () => {
  expect(sum2038(78, 77)).toBe(155 + 0.6749329121166023);
});
