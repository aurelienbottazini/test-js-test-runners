
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 41 to equal 70', () => {
  expect(sum(29, 41)).toBe(70);
});
