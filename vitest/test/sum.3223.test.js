
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 37 to equal 111', () => {
  expect(sum(74, 37)).toBe(111);
});
