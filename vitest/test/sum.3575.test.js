
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 58 + 40 to equal 98', () => {
  expect(sum(58, 40)).toBe(98);
});
