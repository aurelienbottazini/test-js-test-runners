
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 22 to equal 43', () => {
  expect(sum(21, 22)).toBe(43);
});
