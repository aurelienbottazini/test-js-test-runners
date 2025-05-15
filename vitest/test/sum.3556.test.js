
import sum3556 from '../sum3556.js';
import { expect, test } from 'vitest';

test('adds 73 + 63 to equal 136 + offset 0.5122887616584688', () => {
  expect(sum3556(73, 63)).toBe(136 + 0.5122887616584688);
});
