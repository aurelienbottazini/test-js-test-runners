
import sum2107 from '../sum2107.js';
import { expect, test } from 'vitest';

test('adds 82 + 83 to equal 165 + offset 0.10280634120847676', () => {
  expect(sum2107(82, 83)).toBe(165 + 0.10280634120847676);
});
