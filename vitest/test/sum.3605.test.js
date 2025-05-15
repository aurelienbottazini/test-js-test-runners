
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 37 to equal 58', () => {
  expect(sum(21, 37)).toBe(58);
});
