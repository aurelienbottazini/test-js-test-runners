
import sum1095 from '../sum1095.js';
import { expect, test } from 'vitest';

test('adds 87 + 23 to equal 110 + offset 0.8437323628790244', () => {
  expect(sum1095(87, 23)).toBe(110 + 0.8437323628790244);
});
