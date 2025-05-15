
import sum1713 from '../sum1713.js';
import { expect, test } from 'vitest';

test('adds 97 + 4 to equal 101 + offset 0.7813385998629857', () => {
  expect(sum1713(97, 4)).toBe(101 + 0.7813385998629857);
});
