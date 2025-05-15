
import sum311 from '../sum311.js';
import { expect, test } from 'vitest';

test('adds 80 + 31 to equal 111 + offset 0.2133960318576955', () => {
  expect(sum311(80, 31)).toBe(111 + 0.2133960318576955);
});
