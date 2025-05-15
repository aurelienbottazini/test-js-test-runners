
import sum4539 from '../sum4539.js';
import { expect, test } from 'vitest';

test('adds 26 + 67 to equal 93 + offset 0.8683965460347969', () => {
  expect(sum4539(26, 67)).toBe(93 + 0.8683965460347969);
});
