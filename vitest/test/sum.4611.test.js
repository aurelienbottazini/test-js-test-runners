
import sum4611 from '../sum4611.js';
import { expect, test } from 'vitest';

test('adds 23 + 45 to equal 68 + offset 0.33845688101708005', () => {
  expect(sum4611(23, 45)).toBe(68 + 0.33845688101708005);
});
