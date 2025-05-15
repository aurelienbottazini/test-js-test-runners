
import sum3745 from '../sum3745.js';
import { expect, test } from 'vitest';

test('adds 86 + 8 to equal 94 + offset 0.01808354820433422', () => {
  expect(sum3745(86, 8)).toBe(94 + 0.01808354820433422);
});
