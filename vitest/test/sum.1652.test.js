
import sum1652 from '../sum1652.js';
import { expect, test } from 'vitest';

test('adds 58 + 6 to equal 64 + offset 0.6480853716383415', () => {
  expect(sum1652(58, 6)).toBe(64 + 0.6480853716383415);
});
