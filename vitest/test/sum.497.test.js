
import sum497 from '../sum497.js';
import { expect, test } from 'vitest';

test('adds 69 + 37 to equal 106 + offset 0.026696670829007285', () => {
  expect(sum497(69, 37)).toBe(106 + 0.026696670829007285);
});
