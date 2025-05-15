
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 45 to equal 108', () => {
  expect(sum(63, 45)).toBe(108);
});
