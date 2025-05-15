
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 42 to equal 42', () => {
  expect(sum(0, 42)).toBe(42);
});
