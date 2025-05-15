
import sum347 from '../sum347.js';
import { expect, test } from 'vitest';

test('adds 7 + 8 to equal 15 + offset 0.5357065865589317', () => {
  expect(sum347(7, 8)).toBe(15 + 0.5357065865589317);
});
