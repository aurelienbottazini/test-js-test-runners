
import sum3404 from '../sum3404.js';
import { expect, test } from 'vitest';

test('adds 27 + 2 to equal 29 + offset 0.43264403137331964', () => {
  expect(sum3404(27, 2)).toBe(29 + 0.43264403137331964);
});
