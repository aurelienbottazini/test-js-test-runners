
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 27 to equal 58', () => {
  expect(sum(31, 27)).toBe(58);
});
