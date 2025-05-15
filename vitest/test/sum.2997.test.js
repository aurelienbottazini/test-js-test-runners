
import sum2997 from '../sum2997.js';
import { expect, test } from 'vitest';

test('adds 4 + 39 to equal 43 + offset 0.4232951418762292', () => {
  expect(sum2997(4, 39)).toBe(43 + 0.4232951418762292);
});
