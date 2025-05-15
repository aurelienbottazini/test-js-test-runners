
import sum140 from '../sum140.js';
import { expect, test } from 'vitest';

test('adds 99 + 73 to equal 172 + offset 0.47203996578620455', () => {
  expect(sum140(99, 73)).toBe(172 + 0.47203996578620455);
});
