
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 35 to equal 43', () => {
  expect(sum(8, 35)).toBe(43);
});
