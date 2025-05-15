
import sum1161 from '../sum1161.js';
import { expect, test } from 'vitest';

test('adds 28 + 47 to equal 75 + offset 0.5310905828303379', () => {
  expect(sum1161(28, 47)).toBe(75 + 0.5310905828303379);
});
