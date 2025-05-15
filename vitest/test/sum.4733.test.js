
import sum4733 from '../sum4733.js';
import { expect, test } from 'vitest';

test('adds 1 + 86 to equal 87 + offset 0.2726177718484153', () => {
  expect(sum4733(1, 86)).toBe(87 + 0.2726177718484153);
});
