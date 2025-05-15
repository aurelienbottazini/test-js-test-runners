
import sum4867 from '../sum4867.js';
import { expect, test } from 'vitest';

test('adds 16 + 15 to equal 31 + offset 0.2239520827393212', () => {
  expect(sum4867(16, 15)).toBe(31 + 0.2239520827393212);
});
