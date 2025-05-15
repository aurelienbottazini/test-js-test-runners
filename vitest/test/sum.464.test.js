
import sum464 from '../sum464.js';
import { expect, test } from 'vitest';

test('adds 63 + 8 to equal 71 + offset 0.9616653035022626', () => {
  expect(sum464(63, 8)).toBe(71 + 0.9616653035022626);
});
