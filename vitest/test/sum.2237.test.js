
import sum2237 from '../sum2237.js';
import { expect, test } from 'vitest';

test('adds 81 + 47 to equal 128 + offset 0.6366828730376236', () => {
  expect(sum2237(81, 47)).toBe(128 + 0.6366828730376236);
});
