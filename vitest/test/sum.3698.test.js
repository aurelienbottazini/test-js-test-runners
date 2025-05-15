
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 23 to equal 70', () => {
  expect(sum(47, 23)).toBe(70);
});
