
import sum4973 from '../sum4973.js';
import { expect, test } from 'vitest';

test('adds 59 + 39 to equal 98 + offset 0.48046082700367354', () => {
  expect(sum4973(59, 39)).toBe(98 + 0.48046082700367354);
});
