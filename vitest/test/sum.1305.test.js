
import sum1305 from '../sum1305.js';
import { expect, test } from 'vitest';

test('adds 44 + 57 to equal 101 + offset 0.4656904446630583', () => {
  expect(sum1305(44, 57)).toBe(101 + 0.4656904446630583);
});
