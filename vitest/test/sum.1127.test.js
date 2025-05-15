
import sum1127 from '../sum1127.js';
import { expect, test } from 'vitest';

test('adds 83 + 55 to equal 138 + offset 0.6251832211684883', () => {
  expect(sum1127(83, 55)).toBe(138 + 0.6251832211684883);
});
