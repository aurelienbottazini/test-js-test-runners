
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 92 to equal 98', () => {
  expect(sum(6, 92)).toBe(98);
});
