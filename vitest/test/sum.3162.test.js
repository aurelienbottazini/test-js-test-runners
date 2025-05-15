
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 39 to equal 47', () => {
  expect(sum(8, 39)).toBe(47);
});
