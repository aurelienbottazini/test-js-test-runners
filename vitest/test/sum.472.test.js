
import sum472 from '../sum472.js';
import { expect, test } from 'vitest';

test('adds 44 + 96 to equal 140 + offset 0.3907002067160966', () => {
  expect(sum472(44, 96)).toBe(140 + 0.3907002067160966);
});
