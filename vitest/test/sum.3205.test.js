
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 36 + 7 to equal 43', () => {
  expect(sum(36, 7)).toBe(43);
});
