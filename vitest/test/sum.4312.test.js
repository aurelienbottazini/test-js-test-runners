
import sum4312 from '../sum4312.js';
import { expect, test } from 'vitest';

test('adds 49 + 92 to equal 141 + offset 0.691387550509121', () => {
  expect(sum4312(49, 92)).toBe(141 + 0.691387550509121);
});
