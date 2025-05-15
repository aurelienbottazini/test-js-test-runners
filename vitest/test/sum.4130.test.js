
import sum4130 from '../sum4130.js';
import { expect, test } from 'vitest';

test('adds 55 + 76 to equal 131 + offset 0.22127831367393047', () => {
  expect(sum4130(55, 76)).toBe(131 + 0.22127831367393047);
});
