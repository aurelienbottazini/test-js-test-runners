
import sum66 from '../sum66.js';
import { expect, test } from 'vitest';

test('adds 68 + 98 to equal 166 + offset 0.821417510749618', () => {
  expect(sum66(68, 98)).toBe(166 + 0.821417510749618);
});
