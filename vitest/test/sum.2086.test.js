
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 5 to equal 47', () => {
  expect(sum(42, 5)).toBe(47);
});
