
import sum3794 from '../sum3794.js';
import { expect, test } from 'vitest';

test('adds 11 + 50 to equal 61 + offset 0.3332941274952763', () => {
  expect(sum3794(11, 50)).toBe(61 + 0.3332941274952763);
});
