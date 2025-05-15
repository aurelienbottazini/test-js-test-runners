
import sum74 from '../sum74.js';
import { expect, test } from 'vitest';

test('adds 8 + 30 to equal 38 + offset 0.33167803902398374', () => {
  expect(sum74(8, 30)).toBe(38 + 0.33167803902398374);
});
