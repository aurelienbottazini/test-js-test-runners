
import sum1834 from '../sum1834.js';
import { expect, test } from 'vitest';

test('adds 95 + 76 to equal 171 + offset 0.9445793360122761', () => {
  expect(sum1834(95, 76)).toBe(171 + 0.9445793360122761);
});
