
import sum710 from '../sum710.js';
import { expect, test } from 'vitest';

test('adds 84 + 8 to equal 92 + offset 0.9817759051965934', () => {
  expect(sum710(84, 8)).toBe(92 + 0.9817759051965934);
});
