
import sum654 from '../sum654.js';
import { expect, test } from 'vitest';

test('adds 53 + 67 to equal 120 + offset 0.40357902804199475', () => {
  expect(sum654(53, 67)).toBe(120 + 0.40357902804199475);
});
