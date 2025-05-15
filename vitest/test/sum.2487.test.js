
import sum2487 from '../sum2487.js';
import { expect, test } from 'vitest';

test('adds 6 + 84 to equal 90 + offset 0.03848061681493509', () => {
  expect(sum2487(6, 84)).toBe(90 + 0.03848061681493509);
});
