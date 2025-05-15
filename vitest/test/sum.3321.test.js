
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 95 to equal 98', () => {
  expect(sum(3, 95)).toBe(98);
});
