
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 40 to equal 42', () => {
  expect(sum(2, 40)).toBe(42);
});
