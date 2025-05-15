
import sum2097 from '../sum2097.js';
import { expect, test } from 'vitest';

test('adds 69 + 87 to equal 156 + offset 0.43807114570367234', () => {
  expect(sum2097(69, 87)).toBe(156 + 0.43807114570367234);
});
