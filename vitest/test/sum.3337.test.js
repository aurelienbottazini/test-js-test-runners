
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 31 to equal 70', () => {
  expect(sum(39, 31)).toBe(70);
});
