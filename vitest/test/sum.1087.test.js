
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 12 to equal 70', () => {
  expect(sum(58, 12)).toBe(70);
});
