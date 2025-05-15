
import sum1582 from '../sum1582.js';
import { expect, test } from 'vitest';

test('adds 33 + 34 to equal 67 + offset 0.2008508677327271', () => {
  expect(sum1582(33, 34)).toBe(67 + 0.2008508677327271);
});
