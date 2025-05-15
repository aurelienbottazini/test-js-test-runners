
import sum2411 from '../sum2411.js';
import { expect, test } from 'vitest';

test('adds 79 + 66 to equal 145 + offset 0.4215848503339875', () => {
  expect(sum2411(79, 66)).toBe(145 + 0.4215848503339875);
});
