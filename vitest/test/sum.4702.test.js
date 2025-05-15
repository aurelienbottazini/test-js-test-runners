
import sum4702 from '../sum4702.js';
import { expect, test } from 'vitest';

test('adds 4 + 67 to equal 71 + offset 0.48066447516664723', () => {
  expect(sum4702(4, 67)).toBe(71 + 0.48066447516664723);
});
