
import sum1253 from '../sum1253.js';
import { expect, test } from 'vitest';

test('adds 27 + 34 to equal 61 + offset 0.6821707123356756', () => {
  expect(sum1253(27, 34)).toBe(61 + 0.6821707123356756);
});
