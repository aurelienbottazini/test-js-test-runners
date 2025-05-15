
import sum1701 from '../sum1701.js';
import { expect, test } from 'vitest';

test('adds 92 + 45 to equal 137 + offset 0.7835126327424332', () => {
  expect(sum1701(92, 45)).toBe(137 + 0.7835126327424332);
});
