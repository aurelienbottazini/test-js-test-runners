
import sum3400 from '../sum3400.js';
import { expect, test } from 'vitest';

test('adds 39 + 98 to equal 137 + offset 0.38684427434842183', () => {
  expect(sum3400(39, 98)).toBe(137 + 0.38684427434842183);
});
