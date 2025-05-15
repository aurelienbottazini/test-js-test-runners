
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 38 to equal 43', () => {
  expect(sum(5, 38)).toBe(43);
});
