
import sum3688 from '../sum3688.js';
import { expect, test } from 'vitest';

test('adds 85 + 3 to equal 88 + offset 0.6213201640712551', () => {
  expect(sum3688(85, 3)).toBe(88 + 0.6213201640712551);
});
