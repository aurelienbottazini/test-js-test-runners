
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 69 to equal 70', () => {
  expect(sum(1, 69)).toBe(70);
});
