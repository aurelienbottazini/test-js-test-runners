
import sum3045 from '../sum3045.js';
import { expect, test } from 'vitest';

test('adds 16 + 70 to equal 86 + offset 0.6123851545533027', () => {
  expect(sum3045(16, 70)).toBe(86 + 0.6123851545533027);
});
