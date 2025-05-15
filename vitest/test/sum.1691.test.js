
import sum1691 from '../sum1691.js';
import { expect, test } from 'vitest';

test('adds 25 + 7 to equal 32 + offset 0.7760925981770792', () => {
  expect(sum1691(25, 7)).toBe(32 + 0.7760925981770792);
});
