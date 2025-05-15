
import sum3086 from '../sum3086.js';
import { expect, test } from 'vitest';

test('adds 63 + 91 to equal 154 + offset 0.404308460248766', () => {
  expect(sum3086(63, 91)).toBe(154 + 0.404308460248766);
});
