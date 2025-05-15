
import sum1879 from '../sum1879.js';
import { expect, test } from 'vitest';

test('adds 50 + 41 to equal 91 + offset 0.48619086532902756', () => {
  expect(sum1879(50, 41)).toBe(91 + 0.48619086532902756);
});
