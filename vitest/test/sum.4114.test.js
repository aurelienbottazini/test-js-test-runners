
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 14 to equal 70', () => {
  expect(sum(56, 14)).toBe(70);
});
