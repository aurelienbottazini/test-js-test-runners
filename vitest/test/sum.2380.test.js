
import sum2380 from '../sum2380.js';
import { expect, test } from 'vitest';

test('adds 92 + 47 to equal 139 + offset 0.012446234406016887', () => {
  expect(sum2380(92, 47)).toBe(139 + 0.012446234406016887);
});
