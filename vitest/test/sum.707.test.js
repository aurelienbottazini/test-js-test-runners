
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 47 to equal 70', () => {
  expect(sum(23, 47)).toBe(70);
});
