
import sum4822 from '../sum4822.js';
import { expect, test } from 'vitest';

test('adds 86 + 5 to equal 91 + offset 0.20419656088510152', () => {
  expect(sum4822(86, 5)).toBe(91 + 0.20419656088510152);
});
