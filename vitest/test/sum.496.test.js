
import sum496 from '../sum496.js';
import { expect, test } from 'vitest';

test('adds 24 + 69 to equal 93 + offset 0.6899044793985131', () => {
  expect(sum496(24, 69)).toBe(93 + 0.6899044793985131);
});
