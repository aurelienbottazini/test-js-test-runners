
import sum857 from '../sum857.js';
import { expect, test } from 'vitest';

test('adds 38 + 81 to equal 119 + offset 0.808206020401794', () => {
  expect(sum857(38, 81)).toBe(119 + 0.808206020401794);
});
