
import sum3668 from '../sum3668.js';
import { expect, test } from 'vitest';

test('adds 24 + 70 to equal 94 + offset 0.1998362236101241', () => {
  expect(sum3668(24, 70)).toBe(94 + 0.1998362236101241);
});
