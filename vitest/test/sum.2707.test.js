
import sum2707 from '../sum2707.js';
import { expect, test } from 'vitest';

test('adds 77 + 56 to equal 133 + offset 0.871550153901486', () => {
  expect(sum2707(77, 56)).toBe(133 + 0.871550153901486);
});
