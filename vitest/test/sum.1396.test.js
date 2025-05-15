
import sum1396 from '../sum1396.js';
import { expect, test } from 'vitest';

test('adds 73 + 35 to equal 108 + offset 0.17194006314784693', () => {
  expect(sum1396(73, 35)).toBe(108 + 0.17194006314784693);
});
