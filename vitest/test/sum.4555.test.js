
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 45 to equal 63', () => {
  expect(sum(18, 45)).toBe(63);
});
