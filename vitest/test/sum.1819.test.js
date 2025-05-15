
import sum1819 from '../sum1819.js';
import { expect, test } from 'vitest';

test('adds 50 + 28 to equal 78 + offset 0.8414445068727744', () => {
  expect(sum1819(50, 28)).toBe(78 + 0.8414445068727744);
});
