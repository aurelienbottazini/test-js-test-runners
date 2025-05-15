
import sum1239 from '../sum1239.js';
import { expect, test } from 'vitest';

test('adds 24 + 87 to equal 111 + offset 0.2878392532227426', () => {
  expect(sum1239(24, 87)).toBe(111 + 0.2878392532227426);
});
