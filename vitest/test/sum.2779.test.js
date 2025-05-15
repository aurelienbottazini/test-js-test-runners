
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 37 to equal 118', () => {
  expect(sum(81, 37)).toBe(118);
});
