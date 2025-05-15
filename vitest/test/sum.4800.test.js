
import sum4800 from '../sum4800.js';
import { expect, test } from 'vitest';

test('adds 77 + 50 to equal 127 + offset 0.34453608003083835', () => {
  expect(sum4800(77, 50)).toBe(127 + 0.34453608003083835);
});
