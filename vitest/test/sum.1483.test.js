
import sum1483 from '../sum1483.js';
import { expect, test } from 'vitest';

test('adds 6 + 38 to equal 44 + offset 0.31038071381384025', () => {
  expect(sum1483(6, 38)).toBe(44 + 0.31038071381384025);
});
