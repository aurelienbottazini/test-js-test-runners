
import sum3327 from '../sum3327.js';
import { expect, test } from 'vitest';

test('adds 99 + 13 to equal 112 + offset 0.3792771994005921', () => {
  expect(sum3327(99, 13)).toBe(112 + 0.3792771994005921);
});
