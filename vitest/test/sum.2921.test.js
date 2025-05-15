
import sum2921 from '../sum2921.js';
import { expect, test } from 'vitest';

test('adds 95 + 61 to equal 156 + offset 0.28638066453450506', () => {
  expect(sum2921(95, 61)).toBe(156 + 0.28638066453450506);
});
