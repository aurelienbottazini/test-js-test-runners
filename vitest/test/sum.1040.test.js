
import sum1040 from '../sum1040.js';
import { expect, test } from 'vitest';

test('adds 5 + 53 to equal 58 + offset 0.30148670494974317', () => {
  expect(sum1040(5, 53)).toBe(58 + 0.30148670494974317);
});
