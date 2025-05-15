
import sum1729 from '../sum1729.js';
import { expect, test } from 'vitest';

test('adds 13 + 13 to equal 26 + offset 0.6231472041215181', () => {
  expect(sum1729(13, 13)).toBe(26 + 0.6231472041215181);
});
