
import sum2825 from '../sum2825.js';
import { expect, test } from 'vitest';

test('adds 86 + 40 to equal 126 + offset 0.08604784426227396', () => {
  expect(sum2825(86, 40)).toBe(126 + 0.08604784426227396);
});
