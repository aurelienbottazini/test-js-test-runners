
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 38 to equal 98', () => {
  expect(sum(60, 38)).toBe(98);
});
