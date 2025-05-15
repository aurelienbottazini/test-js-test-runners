
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 0 to equal 42', () => {
  expect(sum(42, 0)).toBe(42);
});
