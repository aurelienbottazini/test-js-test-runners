
import sum4566 from '../sum4566.js';
import { expect, test } from 'vitest';

test('adds 8 + 94 to equal 102 + offset 0.34683987328686183', () => {
  expect(sum4566(8, 94)).toBe(102 + 0.34683987328686183);
});
