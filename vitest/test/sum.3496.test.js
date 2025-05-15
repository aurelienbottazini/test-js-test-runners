
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 35 to equal 70', () => {
  expect(sum(35, 35)).toBe(70);
});
