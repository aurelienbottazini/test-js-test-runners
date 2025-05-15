
import sum1782 from '../sum1782.js';
import { expect, test } from 'vitest';

test('adds 65 + 7 to equal 72 + offset 0.48983893186008076', () => {
  expect(sum1782(65, 7)).toBe(72 + 0.48983893186008076);
});
