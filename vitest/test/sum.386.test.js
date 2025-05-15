
import sum386 from '../sum386.js';
import { expect, test } from 'vitest';

test('adds 68 + 94 to equal 162 + offset 0.6619985051265337', () => {
  expect(sum386(68, 94)).toBe(162 + 0.6619985051265337);
});
