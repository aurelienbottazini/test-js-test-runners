
import sum4710 from '../sum4710.js';
import { expect, test } from 'vitest';

test('adds 34 + 43 to equal 77 + offset 0.24741053982561212', () => {
  expect(sum4710(34, 43)).toBe(77 + 0.24741053982561212);
});
