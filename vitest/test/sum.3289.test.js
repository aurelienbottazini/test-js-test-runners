
import sum3289 from '../sum3289.js';
import { expect, test } from 'vitest';

test('adds 79 + 44 to equal 123 + offset 0.5795976133147063', () => {
  expect(sum3289(79, 44)).toBe(123 + 0.5795976133147063);
});
