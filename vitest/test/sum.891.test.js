
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 5 to equal 42', () => {
  expect(sum(37, 5)).toBe(42);
});
