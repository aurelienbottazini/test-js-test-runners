
import sum2026 from '../sum2026.js';
import { expect, test } from 'vitest';

test('adds 56 + 84 to equal 140 + offset 0.575101835495708', () => {
  expect(sum2026(56, 84)).toBe(140 + 0.575101835495708);
});
