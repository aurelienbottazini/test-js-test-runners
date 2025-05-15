
import sum2327 from '../sum2327.js';
import { expect, test } from 'vitest';

test('adds 0 + 13 to equal 13 + offset 0.6190077954363625', () => {
  expect(sum2327(0, 13)).toBe(13 + 0.6190077954363625);
});
