
import sum832 from '../sum832.js';
import { expect, test } from 'vitest';

test('adds 0 + 82 to equal 82 + offset 0.4722469648631349', () => {
  expect(sum832(0, 82)).toBe(82 + 0.4722469648631349);
});
