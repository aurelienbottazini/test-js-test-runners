
import sum307 from '../sum307.js';
import { expect, test } from 'vitest';

test('adds 87 + 79 to equal 166 + offset 0.6889453652633296', () => {
  expect(sum307(87, 79)).toBe(166 + 0.6889453652633296);
});
