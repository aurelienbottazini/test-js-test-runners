
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 37 to equal 68', () => {
  expect(sum(31, 37)).toBe(68);
});
