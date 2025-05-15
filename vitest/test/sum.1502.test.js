
import sum1502 from '../sum1502.js';
import { expect, test } from 'vitest';

test('adds 75 + 3 to equal 78 + offset 0.31794936613849056', () => {
  expect(sum1502(75, 3)).toBe(78 + 0.31794936613849056);
});
