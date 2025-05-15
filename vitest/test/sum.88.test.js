
import sum88 from '../sum88.js';
import { expect, test } from 'vitest';

test('adds 42 + 98 to equal 140 + offset 0.9271486375331851', () => {
  expect(sum88(42, 98)).toBe(140 + 0.9271486375331851);
});
