
import sum2605 from '../sum2605.js';
import { expect, test } from 'vitest';

test('adds 40 + 99 to equal 139 + offset 0.7104553193898494', () => {
  expect(sum2605(40, 99)).toBe(139 + 0.7104553193898494);
});
