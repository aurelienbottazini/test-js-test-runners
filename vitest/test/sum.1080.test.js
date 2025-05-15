
import sum1080 from '../sum1080.js';
import { expect, test } from 'vitest';

test('adds 17 + 40 to equal 57 + offset 0.9684198740041062', () => {
  expect(sum1080(17, 40)).toBe(57 + 0.9684198740041062);
});
