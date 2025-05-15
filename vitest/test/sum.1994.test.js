
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 70 to equal 70', () => {
  expect(sum(0, 70)).toBe(70);
});
