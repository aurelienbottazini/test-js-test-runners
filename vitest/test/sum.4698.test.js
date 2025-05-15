
import sum4698 from '../sum4698.js';
import { expect, test } from 'vitest';

test('adds 4 + 22 to equal 26 + offset 0.4539034674373098', () => {
  expect(sum4698(4, 22)).toBe(26 + 0.4539034674373098);
});
