
import sum4913 from '../sum4913.js';
import { expect, test } from 'vitest';

test('adds 43 + 75 to equal 118 + offset 0.13949925593218093', () => {
  expect(sum4913(43, 75)).toBe(118 + 0.13949925593218093);
});
