
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 23 + 75 to equal 98', () => {
  expect(sum(23, 75)).toBe(98);
});
