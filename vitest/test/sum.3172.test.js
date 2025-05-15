
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 67 to equal 70', () => {
  expect(sum(3, 67)).toBe(70);
});
