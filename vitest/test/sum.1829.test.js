
import sum1829 from '../sum1829.js';
import { expect, test } from 'vitest';

test('adds 64 + 42 to equal 106 + offset 0.5419659927520416', () => {
  expect(sum1829(64, 42)).toBe(106 + 0.5419659927520416);
});
