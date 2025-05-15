
import sum2032 from '../sum2032.js';
import { expect, test } from 'vitest';

test('adds 28 + 76 to equal 104 + offset 0.7779506791278026', () => {
  expect(sum2032(28, 76)).toBe(104 + 0.7779506791278026);
});
