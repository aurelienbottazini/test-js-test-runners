
import sum4606 from '../sum4606.js';
import { expect, test } from 'vitest';

test('adds 99 + 85 to equal 184 + offset 0.5699139487124213', () => {
  expect(sum4606(99, 85)).toBe(184 + 0.5699139487124213);
});
