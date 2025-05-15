
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 55 to equal 98', () => {
  expect(sum(43, 55)).toBe(98);
});
