
import sum1921 from '../sum1921.js';
import { expect, test } from 'vitest';

test('adds 12 + 28 to equal 40 + offset 0.5838332163867271', () => {
  expect(sum1921(12, 28)).toBe(40 + 0.5838332163867271);
});
