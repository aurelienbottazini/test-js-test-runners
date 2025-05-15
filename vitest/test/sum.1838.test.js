
import sum1838 from '../sum1838.js';
import { expect, test } from 'vitest';

test('adds 20 + 3 to equal 23 + offset 0.6870451661723566', () => {
  expect(sum1838(20, 3)).toBe(23 + 0.6870451661723566);
});
