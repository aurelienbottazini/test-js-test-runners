
import sum3689 from '../sum3689.js';
import { expect, test } from 'vitest';

test('adds 67 + 89 to equal 156 + offset 0.005445514268015983', () => {
  expect(sum3689(67, 89)).toBe(156 + 0.005445514268015983);
});
