
import sum1446 from '../sum1446.js';
import { expect, test } from 'vitest';

test('adds 80 + 29 to equal 109 + offset 0.03730530275685662', () => {
  expect(sum1446(80, 29)).toBe(109 + 0.03730530275685662);
});
