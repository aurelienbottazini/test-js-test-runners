
import sum2175 from '../sum2175.js';
import { expect, test } from 'vitest';

test('adds 64 + 92 to equal 156 + offset 0.5471718038820476', () => {
  expect(sum2175(64, 92)).toBe(156 + 0.5471718038820476);
});
