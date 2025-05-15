
import sum2567 from '../sum2567.js';
import { expect, test } from 'vitest';

test('adds 53 + 12 to equal 65 + offset 0.7471456635803265', () => {
  expect(sum2567(53, 12)).toBe(65 + 0.7471456635803265);
});
