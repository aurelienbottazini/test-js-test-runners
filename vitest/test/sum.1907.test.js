
import sum1907 from '../sum1907.js';
import { expect, test } from 'vitest';

test('adds 7 + 42 to equal 49 + offset 0.10300843673859195', () => {
  expect(sum1907(7, 42)).toBe(49 + 0.10300843673859195);
});
