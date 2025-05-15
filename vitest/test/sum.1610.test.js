
import sum1610 from '../sum1610.js';
import { expect, test } from 'vitest';

test('adds 24 + 70 to equal 94 + offset 0.9754030070432802', () => {
  expect(sum1610(24, 70)).toBe(94 + 0.9754030070432802);
});
