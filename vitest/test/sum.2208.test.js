
import sum2208 from '../sum2208.js';
import { expect, test } from 'vitest';

test('adds 74 + 29 to equal 103 + offset 0.6095471895142391', () => {
  expect(sum2208(74, 29)).toBe(103 + 0.6095471895142391);
});
