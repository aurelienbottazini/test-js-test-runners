
import sum4248 from '../sum4248.js';
import { expect, test } from 'vitest';

test('adds 94 + 3 to equal 97 + offset 0.5862020760716257', () => {
  expect(sum4248(94, 3)).toBe(97 + 0.5862020760716257);
});
