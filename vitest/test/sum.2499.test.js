
import sum2499 from '../sum2499.js';
import { expect, test } from 'vitest';

test('adds 98 + 92 to equal 190 + offset 0.7353168329478977', () => {
  expect(sum2499(98, 92)).toBe(190 + 0.7353168329478977);
});
