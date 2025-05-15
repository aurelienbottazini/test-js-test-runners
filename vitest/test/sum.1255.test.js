
import sum1255 from '../sum1255.js';
import { expect, test } from 'vitest';

test('adds 29 + 14 to equal 43 + offset 0.3447627059761751', () => {
  expect(sum1255(29, 14)).toBe(43 + 0.3447627059761751);
});
