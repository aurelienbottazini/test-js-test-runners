
import sum3196 from '../sum3196.js';
import { expect, test } from 'vitest';

test('adds 7 + 79 to equal 86 + offset 0.4817010918912137', () => {
  expect(sum3196(7, 79)).toBe(86 + 0.4817010918912137);
});
