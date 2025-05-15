
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 10 to equal 42', () => {
  expect(sum(32, 10)).toBe(42);
});
