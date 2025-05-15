
import sum4247 from '../sum4247.js';
import { expect, test } from 'vitest';

test('adds 26 + 6 to equal 32 + offset 0.002649823011881103', () => {
  expect(sum4247(26, 6)).toBe(32 + 0.002649823011881103);
});
