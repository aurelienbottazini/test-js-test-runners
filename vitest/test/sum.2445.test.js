
import sum2445 from '../sum2445.js';
import { expect, test } from 'vitest';

test('adds 64 + 36 to equal 100 + offset 0.887875046045431', () => {
  expect(sum2445(64, 36)).toBe(100 + 0.887875046045431);
});
