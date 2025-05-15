
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 7 to equal 70', () => {
  expect(sum(63, 7)).toBe(70);
});
