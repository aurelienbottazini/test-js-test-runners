
import sum1279 from '../sum1279.js';
import { expect, test } from 'vitest';

test('adds 13 + 82 to equal 95 + offset 0.05365037891929347', () => {
  expect(sum1279(13, 82)).toBe(95 + 0.05365037891929347);
});
