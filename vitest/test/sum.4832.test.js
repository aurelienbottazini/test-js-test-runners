
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 11 to equal 98', () => {
  expect(sum(87, 11)).toBe(98);
});
