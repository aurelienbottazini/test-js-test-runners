
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 12 + 31 to equal 43', () => {
  expect(sum(12, 31)).toBe(43);
});
