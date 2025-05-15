
import sum1656 from '../sum1656.js';
import { expect, test } from 'vitest';

test('adds 83 + 25 to equal 108 + offset 0.9596752384715613', () => {
  expect(sum1656(83, 25)).toBe(108 + 0.9596752384715613);
});
