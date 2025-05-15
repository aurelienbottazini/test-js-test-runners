
import sum1514 from '../sum1514.js';
import { expect, test } from 'vitest';

test('adds 49 + 63 to equal 112 + offset 0.22143827639073', () => {
  expect(sum1514(49, 63)).toBe(112 + 0.22143827639073);
});
