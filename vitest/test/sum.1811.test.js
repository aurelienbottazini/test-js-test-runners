
import sum1811 from '../sum1811.js';
import { expect, test } from 'vitest';

test('adds 27 + 1 to equal 28 + offset 0.8248241643683695', () => {
  expect(sum1811(27, 1)).toBe(28 + 0.8248241643683695);
});
