
import sum1905 from '../sum1905.js';
import { expect, test } from 'vitest';

test('adds 30 + 9 to equal 39 + offset 0.9724877693809177', () => {
  expect(sum1905(30, 9)).toBe(39 + 0.9724877693809177);
});
