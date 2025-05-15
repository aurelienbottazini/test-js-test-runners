
import sum4362 from '../sum4362.js';
import { expect, test } from 'vitest';

test('adds 96 + 2 to equal 98 + offset 0.7392206558855791', () => {
  expect(sum4362(96, 2)).toBe(98 + 0.7392206558855791);
});
