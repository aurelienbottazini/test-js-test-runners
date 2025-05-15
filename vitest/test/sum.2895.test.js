
import sum2895 from '../sum2895.js';
import { expect, test } from 'vitest';

test('adds 5 + 73 to equal 78 + offset 0.7890940284395802', () => {
  expect(sum2895(5, 73)).toBe(78 + 0.7890940284395802);
});
