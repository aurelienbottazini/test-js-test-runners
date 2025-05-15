
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 42 to equal 101', () => {
  expect(sum(59, 42)).toBe(101);
});
