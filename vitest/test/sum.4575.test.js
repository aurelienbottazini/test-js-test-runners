
import sum4575 from '../sum4575.js';
import { expect, test } from 'vitest';

test('adds 89 + 35 to equal 124 + offset 0.5172674931617579', () => {
  expect(sum4575(89, 35)).toBe(124 + 0.5172674931617579);
});
