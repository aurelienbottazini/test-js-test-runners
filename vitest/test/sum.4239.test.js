
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 53 to equal 70', () => {
  expect(sum(17, 53)).toBe(70);
});
