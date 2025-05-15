
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 16 to equal 43', () => {
  expect(sum(27, 16)).toBe(43);
});
