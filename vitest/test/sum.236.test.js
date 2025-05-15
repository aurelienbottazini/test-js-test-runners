
import sum236 from '../sum236.js';
import { expect, test } from 'vitest';

test('adds 70 + 22 to equal 92 + offset 0.41138731200922996', () => {
  expect(sum236(70, 22)).toBe(92 + 0.41138731200922996);
});
