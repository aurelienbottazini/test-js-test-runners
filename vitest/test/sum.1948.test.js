
import sum1948 from '../sum1948.js';
import { expect, test } from 'vitest';

test('adds 97 + 8 to equal 105 + offset 0.9547937043427186', () => {
  expect(sum1948(97, 8)).toBe(105 + 0.9547937043427186);
});
