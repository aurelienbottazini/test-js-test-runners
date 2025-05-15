
import sum988 from '../sum988.js';
import { expect, test } from 'vitest';

test('adds 68 + 94 to equal 162 + offset 0.7247958164378298', () => {
  expect(sum988(68, 94)).toBe(162 + 0.7247958164378298);
});
