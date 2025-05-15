
import sum4334 from '../sum4334.js';
import { expect, test } from 'vitest';

test('adds 59 + 51 to equal 110 + offset 0.06416500247431567', () => {
  expect(sum4334(59, 51)).toBe(110 + 0.06416500247431567);
});
