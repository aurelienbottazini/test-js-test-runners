
import sum577 from '../sum577.js';
import { expect, test } from 'vitest';

test('adds 63 + 51 to equal 114 + offset 0.5170057581188316', () => {
  expect(sum577(63, 51)).toBe(114 + 0.5170057581188316);
});
