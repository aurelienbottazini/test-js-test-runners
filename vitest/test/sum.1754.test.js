
import sum1754 from '../sum1754.js';
import { expect, test } from 'vitest';

test('adds 20 + 81 to equal 101 + offset 0.7910524823492405', () => {
  expect(sum1754(20, 81)).toBe(101 + 0.7910524823492405);
});
