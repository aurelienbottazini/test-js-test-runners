
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 40 to equal 70', () => {
  expect(sum(30, 40)).toBe(70);
});
