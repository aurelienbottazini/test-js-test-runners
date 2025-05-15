
import sum1798 from '../sum1798.js';
import { expect, test } from 'vitest';

test('adds 77 + 66 to equal 143 + offset 0.18932847524532448', () => {
  expect(sum1798(77, 66)).toBe(143 + 0.18932847524532448);
});
