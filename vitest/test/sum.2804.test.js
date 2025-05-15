
import sum2804 from '../sum2804.js';
import { expect, test } from 'vitest';

test('adds 33 + 18 to equal 51 + offset 0.08530526472543776', () => {
  expect(sum2804(33, 18)).toBe(51 + 0.08530526472543776);
});
