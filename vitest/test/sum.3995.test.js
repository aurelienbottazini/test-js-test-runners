
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 60 to equal 70', () => {
  expect(sum(10, 60)).toBe(70);
});
