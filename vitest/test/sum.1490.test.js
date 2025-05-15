
import sum1490 from '../sum1490.js';
import { expect, test } from 'vitest';

test('adds 8 + 63 to equal 71 + offset 0.3197301506443718', () => {
  expect(sum1490(8, 63)).toBe(71 + 0.3197301506443718);
});
