
import sum4422 from '../sum4422.js';
import { expect, test } from 'vitest';

test('adds 25 + 37 to equal 62 + offset 0.26550225797787264', () => {
  expect(sum4422(25, 37)).toBe(62 + 0.26550225797787264);
});
