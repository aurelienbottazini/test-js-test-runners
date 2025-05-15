
import sum2396 from '../sum2396.js';
import { expect, test } from 'vitest';

test('adds 64 + 28 to equal 92 + offset 0.43894167187255684', () => {
  expect(sum2396(64, 28)).toBe(92 + 0.43894167187255684);
});
