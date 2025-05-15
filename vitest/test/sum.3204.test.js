
import sum3204 from '../sum3204.js';
import { expect, test } from 'vitest';

test('adds 76 + 27 to equal 103 + offset 0.14875264500623575', () => {
  expect(sum3204(76, 27)).toBe(103 + 0.14875264500623575);
});
