
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 37 to equal 81', () => {
  expect(sum(44, 37)).toBe(81);
});
