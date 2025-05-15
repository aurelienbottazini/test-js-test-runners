
import sum729 from '../sum729.js';
import { expect, test } from 'vitest';

test('adds 20 + 63 to equal 83 + offset 0.974855236631491', () => {
  expect(sum729(20, 63)).toBe(83 + 0.974855236631491);
});
