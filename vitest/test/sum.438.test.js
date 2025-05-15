
import sum438 from '../sum438.js';
import { expect, test } from 'vitest';

test('adds 6 + 7 to equal 13 + offset 0.33971814216051033', () => {
  expect(sum438(6, 7)).toBe(13 + 0.33971814216051033);
});
