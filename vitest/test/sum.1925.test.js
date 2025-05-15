
import sum1925 from '../sum1925.js';
import { expect, test } from 'vitest';

test('adds 53 + 21 to equal 74 + offset 0.9748603439203971', () => {
  expect(sum1925(53, 21)).toBe(74 + 0.9748603439203971);
});
