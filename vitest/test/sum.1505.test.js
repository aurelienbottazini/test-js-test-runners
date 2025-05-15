
import sum1505 from '../sum1505.js';
import { expect, test } from 'vitest';

test('adds 97 + 9 to equal 106 + offset 0.03725265453516635', () => {
  expect(sum1505(97, 9)).toBe(106 + 0.03725265453516635);
});
