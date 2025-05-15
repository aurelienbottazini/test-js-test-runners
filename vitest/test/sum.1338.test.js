
import sum1338 from '../sum1338.js';
import { expect, test } from 'vitest';

test('adds 79 + 83 to equal 162 + offset 0.8616528223448278', () => {
  expect(sum1338(79, 83)).toBe(162 + 0.8616528223448278);
});
