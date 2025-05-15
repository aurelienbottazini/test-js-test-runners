
import sum1843 from '../sum1843.js';
import { expect, test } from 'vitest';

test('adds 74 + 39 to equal 113 + offset 0.09076855260411298', () => {
  expect(sum1843(74, 39)).toBe(113 + 0.09076855260411298);
});
