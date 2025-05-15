
import sum2597 from '../sum2597.js';
import { expect, test } from 'vitest';

test('adds 24 + 99 to equal 123 + offset 0.3373510344280277', () => {
  expect(sum2597(24, 99)).toBe(123 + 0.3373510344280277);
});
