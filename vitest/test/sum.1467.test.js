
import sum1467 from '../sum1467.js';
import { expect, test } from 'vitest';

test('adds 21 + 21 to equal 42 + offset 0.4306498095318052', () => {
  expect(sum1467(21, 21)).toBe(42 + 0.4306498095318052);
});
