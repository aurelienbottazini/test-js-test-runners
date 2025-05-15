
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 37 to equal 124', () => {
  expect(sum(87, 37)).toBe(124);
});
