
import sum1833 from '../sum1833.js';
import { expect, test } from 'vitest';

test('adds 96 + 43 to equal 139 + offset 0.5317740522817254', () => {
  expect(sum1833(96, 43)).toBe(139 + 0.5317740522817254);
});
