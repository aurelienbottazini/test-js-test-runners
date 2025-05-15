
import sum3563 from '../sum3563.js';
import { expect, test } from 'vitest';

test('adds 27 + 2 to equal 29 + offset 0.9492920266303649', () => {
  expect(sum3563(27, 2)).toBe(29 + 0.9492920266303649);
});
