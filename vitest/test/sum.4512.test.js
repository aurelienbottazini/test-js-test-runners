
import sum4512 from '../sum4512.js';
import { expect, test } from 'vitest';

test('adds 31 + 63 to equal 94 + offset 0.819104210563138', () => {
  expect(sum4512(31, 63)).toBe(94 + 0.819104210563138);
});
