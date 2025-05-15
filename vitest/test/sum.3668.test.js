
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 36 to equal 70', () => {
  expect(sum(34, 36)).toBe(70);
});
