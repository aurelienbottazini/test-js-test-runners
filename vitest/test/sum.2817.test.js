
import sum2817 from '../sum2817.js';
import { expect, test } from 'vitest';

test('adds 78 + 50 to equal 128 + offset 0.008931790661318884', () => {
  expect(sum2817(78, 50)).toBe(128 + 0.008931790661318884);
});
