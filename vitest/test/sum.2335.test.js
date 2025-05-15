
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 15 to equal 98', () => {
  expect(sum(83, 15)).toBe(98);
});
