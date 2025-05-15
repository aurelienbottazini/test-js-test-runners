
import sum383 from '../sum383.js';
import { expect, test } from 'vitest';

test('adds 11 + 28 to equal 39 + offset 0.9113677429109578', () => {
  expect(sum383(11, 28)).toBe(39 + 0.9113677429109578);
});
