
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 51 to equal 58', () => {
  expect(sum(7, 51)).toBe(58);
});
