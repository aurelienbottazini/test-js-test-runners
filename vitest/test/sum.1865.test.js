
import sum1865 from '../sum1865.js';
import { expect, test } from 'vitest';

test('adds 74 + 41 to equal 115 + offset 0.5243131306878187', () => {
  expect(sum1865(74, 41)).toBe(115 + 0.5243131306878187);
});
