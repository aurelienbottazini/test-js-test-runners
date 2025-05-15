
import sum3518 from '../sum3518.js';
import { expect, test } from 'vitest';

test('adds 83 + 11 to equal 94 + offset 0.6997473803929949', () => {
  expect(sum3518(83, 11)).toBe(94 + 0.6997473803929949);
});
