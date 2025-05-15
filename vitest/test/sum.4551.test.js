
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 16 to equal 58', () => {
  expect(sum(42, 16)).toBe(58);
});
