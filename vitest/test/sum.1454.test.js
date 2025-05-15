
import sum1454 from '../sum1454.js';
import { expect, test } from 'vitest';

test('adds 66 + 11 to equal 77 + offset 0.15213639423221492', () => {
  expect(sum1454(66, 11)).toBe(77 + 0.15213639423221492);
});
