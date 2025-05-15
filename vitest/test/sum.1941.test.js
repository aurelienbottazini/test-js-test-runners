
import sum1941 from '../sum1941.js';
import { expect, test } from 'vitest';

test('adds 42 + 91 to equal 133 + offset 0.9832276699415564', () => {
  expect(sum1941(42, 91)).toBe(133 + 0.9832276699415564);
});
