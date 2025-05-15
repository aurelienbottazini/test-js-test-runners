
import sum4195 from '../sum4195.js';
import { expect, test } from 'vitest';

test('adds 14 + 28 to equal 42 + offset 0.14263704923484755', () => {
  expect(sum4195(14, 28)).toBe(42 + 0.14263704923484755);
});
