
import sum1399 from '../sum1399.js';
import { expect, test } from 'vitest';

test('adds 89 + 4 to equal 93 + offset 0.8194144062009633', () => {
  expect(sum1399(89, 4)).toBe(93 + 0.8194144062009633);
});
