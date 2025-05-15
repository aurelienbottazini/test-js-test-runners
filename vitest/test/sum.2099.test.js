
import sum2099 from '../sum2099.js';
import { expect, test } from 'vitest';

test('adds 14 + 11 to equal 25 + offset 0.6344415662733274', () => {
  expect(sum2099(14, 11)).toBe(25 + 0.6344415662733274);
});
