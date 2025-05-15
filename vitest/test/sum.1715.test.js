
import sum1715 from '../sum1715.js';
import { expect, test } from 'vitest';

test('adds 75 + 63 to equal 138 + offset 0.07999664089854863', () => {
  expect(sum1715(75, 63)).toBe(138 + 0.07999664089854863);
});
