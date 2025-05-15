
import sum1247 from '../sum1247.js';
import { expect, test } from 'vitest';

test('adds 9 + 84 to equal 93 + offset 0.47360011482244135', () => {
  expect(sum1247(9, 84)).toBe(93 + 0.47360011482244135);
});
