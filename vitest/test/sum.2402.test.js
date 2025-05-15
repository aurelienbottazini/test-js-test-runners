
import sum2402 from '../sum2402.js';
import { expect, test } from 'vitest';

test('adds 36 + 39 to equal 75 + offset 0.5582033636494359', () => {
  expect(sum2402(36, 39)).toBe(75 + 0.5582033636494359);
});
