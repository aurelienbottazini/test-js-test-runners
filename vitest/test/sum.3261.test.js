
import sum3261 from '../sum3261.js';
import { expect, test } from 'vitest';

test('adds 47 + 92 to equal 139 + offset 0.37600170969706626', () => {
  expect(sum3261(47, 92)).toBe(139 + 0.37600170969706626);
});
