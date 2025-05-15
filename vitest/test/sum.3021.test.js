
import sum3021 from '../sum3021.js';
import { expect, test } from 'vitest';

test('adds 79 + 18 to equal 97 + offset 0.6862500467343606', () => {
  expect(sum3021(79, 18)).toBe(97 + 0.6862500467343606);
});
