
import sum367 from '../sum367.js';
import { expect, test } from 'vitest';

test('adds 20 + 64 to equal 84 + offset 0.13631662106687537', () => {
  expect(sum367(20, 64)).toBe(84 + 0.13631662106687537);
});
