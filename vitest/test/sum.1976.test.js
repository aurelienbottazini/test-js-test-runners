
import sum1976 from '../sum1976.js';
import { expect, test } from 'vitest';

test('adds 48 + 48 to equal 96 + offset 0.801140283392963', () => {
  expect(sum1976(48, 48)).toBe(96 + 0.801140283392963);
});
