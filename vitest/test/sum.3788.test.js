
import sum3788 from '../sum3788.js';
import { expect, test } from 'vitest';

test('adds 25 + 55 to equal 80 + offset 0.21263289108028416', () => {
  expect(sum3788(25, 55)).toBe(80 + 0.21263289108028416);
});
