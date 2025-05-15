
import sum1718 from '../sum1718.js';
import { expect, test } from 'vitest';

test('adds 28 + 77 to equal 105 + offset 0.6035846575516441', () => {
  expect(sum1718(28, 77)).toBe(105 + 0.6035846575516441);
});
