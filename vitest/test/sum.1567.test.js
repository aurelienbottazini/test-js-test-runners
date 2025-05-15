
import sum1567 from '../sum1567.js';
import { expect, test } from 'vitest';

test('adds 62 + 94 to equal 156 + offset 0.24452976168720209', () => {
  expect(sum1567(62, 94)).toBe(156 + 0.24452976168720209);
});
