
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 37 to equal 76', () => {
  expect(sum(39, 37)).toBe(76);
});
