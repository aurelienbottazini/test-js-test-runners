
import sum1915 from '../sum1915.js';
import { expect, test } from 'vitest';

test('adds 20 + 5 to equal 25 + offset 0.9524011380262513', () => {
  expect(sum1915(20, 5)).toBe(25 + 0.9524011380262513);
});
