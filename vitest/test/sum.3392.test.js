
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 14 to equal 56', () => {
  expect(sum(42, 14)).toBe(56);
});
