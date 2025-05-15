
import sum1504 from '../sum1504.js';
import { expect, test } from 'vitest';

test('adds 18 + 4 to equal 22 + offset 0.2181103314761158', () => {
  expect(sum1504(18, 4)).toBe(22 + 0.2181103314761158);
});
