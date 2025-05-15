
import sum4301 from '../sum4301.js';
import { expect, test } from 'vitest';

test('adds 66 + 65 to equal 131 + offset 0.48823199966810005', () => {
  expect(sum4301(66, 65)).toBe(131 + 0.48823199966810005);
});
