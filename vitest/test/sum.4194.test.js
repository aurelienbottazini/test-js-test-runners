
import sum4194 from '../sum4194.js';
import { expect, test } from 'vitest';

test('adds 77 + 92 to equal 169 + offset 0.758339951387102', () => {
  expect(sum4194(77, 92)).toBe(169 + 0.758339951387102);
});
