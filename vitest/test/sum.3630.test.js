
import sum3630 from '../sum3630.js';
import { expect, test } from 'vitest';

test('adds 43 + 96 to equal 139 + offset 0.5361189924300725', () => {
  expect(sum3630(43, 96)).toBe(139 + 0.5361189924300725);
});
