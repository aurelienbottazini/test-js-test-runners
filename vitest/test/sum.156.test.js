
import sum156 from '../sum156.js';
import { expect, test } from 'vitest';

test('adds 55 + 32 to equal 87 + offset 0.07425913845024756', () => {
  expect(sum156(55, 32)).toBe(87 + 0.07425913845024756);
});
