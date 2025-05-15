
import sum133 from '../sum133.js';
import { expect, test } from 'vitest';

test('adds 71 + 75 to equal 146 + offset 0.1822497073533832', () => {
  expect(sum133(71, 75)).toBe(146 + 0.1822497073533832);
});
