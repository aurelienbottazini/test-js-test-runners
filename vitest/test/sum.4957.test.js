
import sum4957 from '../sum4957.js';
import { expect, test } from 'vitest';

test('adds 99 + 61 to equal 160 + offset 0.45384908747760466', () => {
  expect(sum4957(99, 61)).toBe(160 + 0.45384908747760466);
});
