
import sum2069 from '../sum2069.js';
import { expect, test } from 'vitest';

test('adds 98 + 38 to equal 136 + offset 0.2855346016466418', () => {
  expect(sum2069(98, 38)).toBe(136 + 0.2855346016466418);
});
