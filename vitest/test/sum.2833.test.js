
import sum2833 from '../sum2833.js';
import { expect, test } from 'vitest';

test('adds 6 + 93 to equal 99 + offset 0.6087011675586492', () => {
  expect(sum2833(6, 93)).toBe(99 + 0.6087011675586492);
});
