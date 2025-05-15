
import sum4007 from '../sum4007.js';
import { expect, test } from 'vitest';

test('adds 33 + 82 to equal 115 + offset 0.4009973857946981', () => {
  expect(sum4007(33, 82)).toBe(115 + 0.4009973857946981);
});
