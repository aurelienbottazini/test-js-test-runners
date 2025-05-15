
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 12 to equal 43', () => {
  expect(sum(31, 12)).toBe(43);
});
