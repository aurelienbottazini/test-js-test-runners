
import sum1203 from '../sum1203.js';
import { expect, test } from 'vitest';

test('adds 87 + 93 to equal 180 + offset 0.8573897873265216', () => {
  expect(sum1203(87, 93)).toBe(180 + 0.8573897873265216);
});
