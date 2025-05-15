
import sum967 from '../sum967.js';
import { expect, test } from 'vitest';

test('adds 26 + 25 to equal 51 + offset 0.21024134294074992', () => {
  expect(sum967(26, 25)).toBe(51 + 0.21024134294074992);
});
