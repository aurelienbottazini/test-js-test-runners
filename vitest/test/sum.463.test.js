
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 23 to equal 65', () => {
  expect(sum(42, 23)).toBe(65);
});
