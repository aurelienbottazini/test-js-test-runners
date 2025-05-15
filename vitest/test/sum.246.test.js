
import sum246 from '../sum246.js';
import { expect, test } from 'vitest';

test('adds 61 + 38 to equal 99 + offset 0.3160645580176621', () => {
  expect(sum246(61, 38)).toBe(99 + 0.3160645580176621);
});
