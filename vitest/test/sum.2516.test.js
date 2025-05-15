
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 6 to equal 105', () => {
  expect(sum(99, 6)).toBe(105);
});
