
import sum2924 from '../sum2924.js';
import { expect, test } from 'vitest';

test('adds 57 + 47 to equal 104 + offset 0.5171610611106138', () => {
  expect(sum2924(57, 47)).toBe(104 + 0.5171610611106138);
});
