
import sum1697 from '../sum1697.js';
import { expect, test } from 'vitest';

test('adds 99 + 26 to equal 125 + offset 0.691573983311381', () => {
  expect(sum1697(99, 26)).toBe(125 + 0.691573983311381);
});
