
import sum1081 from '../sum1081.js';
import { expect, test } from 'vitest';

test('adds 39 + 43 to equal 82 + offset 0.9000242862297103', () => {
  expect(sum1081(39, 43)).toBe(82 + 0.9000242862297103);
});
