
import sum1266 from '../sum1266.js';
import { expect, test } from 'vitest';

test('adds 60 + 40 to equal 100 + offset 0.10721968463772624', () => {
  expect(sum1266(60, 40)).toBe(100 + 0.10721968463772624);
});
