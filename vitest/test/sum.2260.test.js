
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 39 to equal 70', () => {
  expect(sum(31, 39)).toBe(70);
});
