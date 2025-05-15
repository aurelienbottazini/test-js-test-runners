
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 42 + 39 to equal 81', () => {
  expect(sum(42, 39)).toBe(81);
});
