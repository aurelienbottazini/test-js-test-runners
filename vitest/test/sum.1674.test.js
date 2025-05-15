
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 39 to equal 43', () => {
  expect(sum(4, 39)).toBe(43);
});
