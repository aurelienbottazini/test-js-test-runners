
import sum1376 from '../sum1376.js';
import { expect, test } from 'vitest';

test('adds 34 + 45 to equal 79 + offset 0.7768851421956048', () => {
  expect(sum1376(34, 45)).toBe(79 + 0.7768851421956048);
});
