
import sum289 from '../sum289.js';
import { expect, test } from 'vitest';

test('adds 38 + 39 to equal 77 + offset 0.11332310387684863', () => {
  expect(sum289(38, 39)).toBe(77 + 0.11332310387684863);
});
