
import sum1306 from '../sum1306.js';
import { expect, test } from 'vitest';

test('adds 8 + 33 to equal 41 + offset 0.6635110269102489', () => {
  expect(sum1306(8, 33)).toBe(41 + 0.6635110269102489);
});
