
import sum3341 from '../sum3341.js';
import { expect, test } from 'vitest';

test('adds 82 + 74 to equal 156 + offset 0.21053168319964832', () => {
  expect(sum3341(82, 74)).toBe(156 + 0.21053168319964832);
});
