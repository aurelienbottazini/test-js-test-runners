
import sum2808 from '../sum2808.js';
import { expect, test } from 'vitest';

test('adds 31 + 63 to equal 94 + offset 0.505796961619029', () => {
  expect(sum2808(31, 63)).toBe(94 + 0.505796961619029);
});
