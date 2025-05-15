
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 69 to equal 111', () => {
  expect(sum(42, 69)).toBe(111);
});
