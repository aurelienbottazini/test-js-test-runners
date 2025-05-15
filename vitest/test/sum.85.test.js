
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 56 to equal 98', () => {
  expect(sum(42, 56)).toBe(98);
});
