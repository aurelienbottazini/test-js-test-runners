
import sum952 from '../sum952.js';
import { expect, test } from 'vitest';

test('adds 1 + 81 to equal 82 + offset 0.04129836253786534', () => {
  expect(sum952(1, 81)).toBe(82 + 0.04129836253786534);
});
