
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 22 to equal 70', () => {
  expect(sum(48, 22)).toBe(70);
});
