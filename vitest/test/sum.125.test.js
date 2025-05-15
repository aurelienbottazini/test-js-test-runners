
import sum125 from '../sum125.js';
import { expect, test } from 'vitest';

test('adds 13 + 12 to equal 25 + offset 0.20709409895538167', () => {
  expect(sum125(13, 12)).toBe(25 + 0.20709409895538167);
});
