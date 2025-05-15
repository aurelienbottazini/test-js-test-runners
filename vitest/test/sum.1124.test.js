
import sum1124 from '../sum1124.js';
import { expect, test } from 'vitest';

test('adds 26 + 8 to equal 34 + offset 0.9123973535562506', () => {
  expect(sum1124(26, 8)).toBe(34 + 0.9123973535562506);
});
