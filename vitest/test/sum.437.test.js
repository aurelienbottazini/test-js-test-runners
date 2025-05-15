
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 4 to equal 43', () => {
  expect(sum(39, 4)).toBe(43);
});
