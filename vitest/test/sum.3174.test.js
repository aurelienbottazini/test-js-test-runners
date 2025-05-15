
import sum3174 from '../sum3174.js';
import { expect, test } from 'vitest';

test('adds 61 + 50 to equal 111 + offset 0.40185504874681144', () => {
  expect(sum3174(61, 50)).toBe(111 + 0.40185504874681144);
});
