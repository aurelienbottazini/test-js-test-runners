
import sum2484 from '../sum2484.js';
import { expect, test } from 'vitest';

test('adds 99 + 30 to equal 129 + offset 0.6153279759886442', () => {
  expect(sum2484(99, 30)).toBe(129 + 0.6153279759886442);
});
