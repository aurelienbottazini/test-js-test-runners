
import sum3663 from '../sum3663.js';
import { expect, test } from 'vitest';

test('adds 76 + 44 to equal 120 + offset 0.2705312907552144', () => {
  expect(sum3663(76, 44)).toBe(120 + 0.2705312907552144);
});
