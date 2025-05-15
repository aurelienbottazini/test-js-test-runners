
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 61 to equal 70', () => {
  expect(sum(9, 61)).toBe(70);
});
