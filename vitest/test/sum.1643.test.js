
import sum1643 from '../sum1643.js';
import { expect, test } from 'vitest';

test('adds 59 + 94 to equal 153 + offset 0.35018542225482097', () => {
  expect(sum1643(59, 94)).toBe(153 + 0.35018542225482097);
});
