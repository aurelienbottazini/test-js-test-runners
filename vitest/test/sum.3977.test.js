
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 6 to equal 70', () => {
  expect(sum(64, 6)).toBe(70);
});
