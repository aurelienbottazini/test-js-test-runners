
import sum636 from '../sum636.js';
import { expect, test } from 'vitest';

test('adds 85 + 73 to equal 158 + offset 0.18560293775079417', () => {
  expect(sum636(85, 73)).toBe(158 + 0.18560293775079417);
});
