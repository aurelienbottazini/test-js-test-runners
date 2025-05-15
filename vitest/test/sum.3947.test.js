
import sum3947 from '../sum3947.js';
import { expect, test } from 'vitest';

test('adds 19 + 37 to equal 56 + offset 0.8170925975559213', () => {
  expect(sum3947(19, 37)).toBe(56 + 0.8170925975559213);
});
