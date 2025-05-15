
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 23 to equal 43', () => {
  expect(sum(20, 23)).toBe(43);
});
