
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 84 to equal 98', () => {
  expect(sum(14, 84)).toBe(98);
});
