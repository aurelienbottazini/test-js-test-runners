
import sum3125 from '../sum3125.js';
import { expect, test } from 'vitest';

test('adds 6 + 58 to equal 64 + offset 0.09701353407300539', () => {
  expect(sum3125(6, 58)).toBe(64 + 0.09701353407300539);
});
