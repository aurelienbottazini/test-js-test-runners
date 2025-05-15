
import sum3986 from '../sum3986.js';
import { expect, test } from 'vitest';

test('adds 95 + 32 to equal 127 + offset 0.5195493862468107', () => {
  expect(sum3986(95, 32)).toBe(127 + 0.5195493862468107);
});
