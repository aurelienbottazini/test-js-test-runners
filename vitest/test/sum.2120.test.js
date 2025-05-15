
import sum2120 from '../sum2120.js';
import { expect, test } from 'vitest';

test('adds 95 + 30 to equal 125 + offset 0.6897043034319154', () => {
  expect(sum2120(95, 30)).toBe(125 + 0.6897043034319154);
});
