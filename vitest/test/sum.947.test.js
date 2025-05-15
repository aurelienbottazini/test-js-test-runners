
import sum947 from '../sum947.js';
import { expect, test } from 'vitest';

test('adds 14 + 7 to equal 21 + offset 0.5845341261146203', () => {
  expect(sum947(14, 7)).toBe(21 + 0.5845341261146203);
});
