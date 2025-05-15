
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 18 to equal 43', () => {
  expect(sum(25, 18)).toBe(43);
});
