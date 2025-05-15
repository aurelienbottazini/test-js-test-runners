
import sum4939 from '../sum4939.js';
import { expect, test } from 'vitest';

test('adds 4 + 59 to equal 63 + offset 0.7354070168571853', () => {
  expect(sum4939(4, 59)).toBe(63 + 0.7354070168571853);
});
