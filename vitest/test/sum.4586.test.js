
import sum4586 from '../sum4586.js';
import { expect, test } from 'vitest';

test('adds 83 + 6 to equal 89 + offset 0.28334707701474127', () => {
  expect(sum4586(83, 6)).toBe(89 + 0.28334707701474127);
});
