
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 38 to equal 70', () => {
  expect(sum(32, 38)).toBe(70);
});
