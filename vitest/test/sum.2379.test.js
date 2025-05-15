
import sum2379 from '../sum2379.js';
import { expect, test } from 'vitest';

test('adds 89 + 14 to equal 103 + offset 0.009074540951645838', () => {
  expect(sum2379(89, 14)).toBe(103 + 0.009074540951645838);
});
