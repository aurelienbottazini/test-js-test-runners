
import sum1990 from '../sum1990.js';
import { expect, test } from 'vitest';

test('adds 51 + 7 to equal 58 + offset 0.9845691225332763', () => {
  expect(sum1990(51, 7)).toBe(58 + 0.9845691225332763);
});
