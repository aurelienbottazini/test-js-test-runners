
import sum2205 from '../sum2205.js';
import { expect, test } from 'vitest';

test('adds 63 + 9 to equal 72 + offset 0.7440540811843425', () => {
  expect(sum2205(63, 9)).toBe(72 + 0.7440540811843425);
});
