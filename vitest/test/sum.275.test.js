
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 66 to equal 70', () => {
  expect(sum(4, 66)).toBe(70);
});
