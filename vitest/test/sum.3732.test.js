
import sum3732 from '../sum3732.js';
import { expect, test } from 'vitest';

test('adds 4 + 73 to equal 77 + offset 0.6251664239276408', () => {
  expect(sum3732(4, 73)).toBe(77 + 0.6251664239276408);
});
