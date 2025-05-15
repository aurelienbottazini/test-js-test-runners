
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 39 to equal 103', () => {
  expect(sum(64, 39)).toBe(103);
});
