
import sum2063 from '../sum2063.js';
import { expect, test } from 'vitest';

test('adds 8 + 50 to equal 58 + offset 0.2074435509757423', () => {
  expect(sum2063(8, 50)).toBe(58 + 0.2074435509757423);
});
