
import sum3212 from '../sum3212.js';
import { expect, test } from 'vitest';

test('adds 8 + 6 to equal 14 + offset 0.7748377035057089', () => {
  expect(sum3212(8, 6)).toBe(14 + 0.7748377035057089);
});
