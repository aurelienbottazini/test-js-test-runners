
import sum3800 from '../sum3800.js';
import { expect, test } from 'vitest';

test('adds 33 + 92 to equal 125 + offset 0.35406945654521693', () => {
  expect(sum3800(33, 92)).toBe(125 + 0.35406945654521693);
});
