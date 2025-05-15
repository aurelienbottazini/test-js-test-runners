
import sum2763 from '../sum2763.js';
import { expect, test } from 'vitest';

test('adds 44 + 85 to equal 129 + offset 0.6313116608328688', () => {
  expect(sum2763(44, 85)).toBe(129 + 0.6313116608328688);
});
