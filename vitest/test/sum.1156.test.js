
import sum1156 from '../sum1156.js';
import { expect, test } from 'vitest';

test('adds 16 + 23 to equal 39 + offset 0.44946317684936876', () => {
  expect(sum1156(16, 23)).toBe(39 + 0.44946317684936876);
});
