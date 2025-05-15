
import sum1954 from '../sum1954.js';
import { expect, test } from 'vitest';

test('adds 21 + 45 to equal 66 + offset 0.382123073520916', () => {
  expect(sum1954(21, 45)).toBe(66 + 0.382123073520916);
});
