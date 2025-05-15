
import sum4343 from '../sum4343.js';
import { expect, test } from 'vitest';

test('adds 39 + 15 to equal 54 + offset 0.0008584570160562466', () => {
  expect(sum4343(39, 15)).toBe(54 + 0.0008584570160562466);
});
