
import sum222 from '../sum222.js';
import { expect, test } from 'vitest';

test('adds 30 + 94 to equal 124 + offset 0.18556470469398223', () => {
  expect(sum222(30, 94)).toBe(124 + 0.18556470469398223);
});
