
import sum640 from '../sum640.js';
import { expect, test } from 'vitest';

test('adds 34 + 6 to equal 40 + offset 0.9531476138620643', () => {
  expect(sum640(34, 6)).toBe(40 + 0.9531476138620643);
});
