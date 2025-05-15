
import sum2339 from '../sum2339.js';
import { expect, test } from 'vitest';

test('adds 33 + 67 to equal 100 + offset 0.8940676588957908', () => {
  expect(sum2339(33, 67)).toBe(100 + 0.8940676588957908);
});
