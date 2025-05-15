
import sum1920 from '../sum1920.js';
import { expect, test } from 'vitest';

test('adds 57 + 92 to equal 149 + offset 0.6322241868474978', () => {
  expect(sum1920(57, 92)).toBe(149 + 0.6322241868474978);
});
