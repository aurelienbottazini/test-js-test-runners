
import sum3735 from '../sum3735.js';
import { expect, test } from 'vitest';

test('adds 23 + 21 to equal 44 + offset 0.18905117824295492', () => {
  expect(sum3735(23, 21)).toBe(44 + 0.18905117824295492);
});
