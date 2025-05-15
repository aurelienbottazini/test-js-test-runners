
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 39 to equal 108', () => {
  expect(sum(69, 39)).toBe(108);
});
