
import sum2835 from '../sum2835.js';
import { expect, test } from 'vitest';

test('adds 1 + 63 to equal 64 + offset 0.4331649286737643', () => {
  expect(sum2835(1, 63)).toBe(64 + 0.4331649286737643);
});
