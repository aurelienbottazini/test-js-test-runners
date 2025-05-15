
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 6 to equal 43', () => {
  expect(sum(37, 6)).toBe(43);
});
