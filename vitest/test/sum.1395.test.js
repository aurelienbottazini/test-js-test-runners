
import sum1395 from '../sum1395.js';
import { expect, test } from 'vitest';

test('adds 5 + 14 to equal 19 + offset 0.9075456571290912', () => {
  expect(sum1395(5, 14)).toBe(19 + 0.9075456571290912);
});
