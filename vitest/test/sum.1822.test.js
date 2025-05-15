
import sum1822 from '../sum1822.js';
import { expect, test } from 'vitest';

test('adds 41 + 90 to equal 131 + offset 0.9981627996738152', () => {
  expect(sum1822(41, 90)).toBe(131 + 0.9981627996738152);
});
