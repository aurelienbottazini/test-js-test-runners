
import sum238 from '../sum238.js';
import { expect, test } from 'vitest';

test('adds 34 + 25 to equal 59 + offset 0.9729392436685277', () => {
  expect(sum238(34, 25)).toBe(59 + 0.9729392436685277);
});
