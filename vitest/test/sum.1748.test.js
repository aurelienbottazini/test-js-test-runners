
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 9 to equal 42', () => {
  expect(sum(33, 9)).toBe(42);
});
