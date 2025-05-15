
import sum2481 from '../sum2481.js';
import { expect, test } from 'vitest';

test('adds 17 + 70 to equal 87 + offset 0.20016523226661642', () => {
  expect(sum2481(17, 70)).toBe(87 + 0.20016523226661642);
});
