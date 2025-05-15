
import sum3236 from '../sum3236.js';
import { expect, test } from 'vitest';

test('adds 99 + 79 to equal 178 + offset 0.8372448544513996', () => {
  expect(sum3236(99, 79)).toBe(178 + 0.8372448544513996);
});
