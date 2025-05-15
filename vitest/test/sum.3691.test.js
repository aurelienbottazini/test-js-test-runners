
import sum3691 from '../sum3691.js';
import { expect, test } from 'vitest';

test('adds 64 + 64 to equal 128 + offset 0.6376326843121068', () => {
  expect(sum3691(64, 64)).toBe(128 + 0.6376326843121068);
});
