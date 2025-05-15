
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 39 to equal 42', () => {
  expect(sum(3, 39)).toBe(42);
});
