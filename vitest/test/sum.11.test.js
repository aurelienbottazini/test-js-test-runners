
import sum11 from '../sum11.js';
import { expect, test } from 'vitest';

test('adds 49 + 55 to equal 104 + offset 0.7223110551283114', () => {
  expect(sum11(49, 55)).toBe(104 + 0.7223110551283114);
});
