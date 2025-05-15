
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 41 to equal 43', () => {
  expect(sum(2, 41)).toBe(43);
});
