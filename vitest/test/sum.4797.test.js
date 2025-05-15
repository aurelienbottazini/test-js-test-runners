
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 1 to equal 70', () => {
  expect(sum(69, 1)).toBe(70);
});
