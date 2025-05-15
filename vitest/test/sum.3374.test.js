
import sum3374 from '../sum3374.js';
import { expect, test } from 'vitest';

test('adds 99 + 71 to equal 170 + offset 0.24269979774932993', () => {
  expect(sum3374(99, 71)).toBe(170 + 0.24269979774932993);
});
