
import sum2824 from '../sum2824.js';
import { expect, test } from 'vitest';

test('adds 78 + 71 to equal 149 + offset 0.6139900553351237', () => {
  expect(sum2824(78, 71)).toBe(149 + 0.6139900553351237);
});
