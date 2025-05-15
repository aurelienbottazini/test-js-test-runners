
import sum1461 from '../sum1461.js';
import { expect, test } from 'vitest';

test('adds 64 + 78 to equal 142 + offset 0.5739501712225434', () => {
  expect(sum1461(64, 78)).toBe(142 + 0.5739501712225434);
});
