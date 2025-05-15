
import sum4337 from '../sum4337.js';
import { expect, test } from 'vitest';

test('adds 70 + 86 to equal 156 + offset 0.18951706311647487', () => {
  expect(sum4337(70, 86)).toBe(156 + 0.18951706311647487);
});
