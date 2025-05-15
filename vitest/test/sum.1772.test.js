
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 3 to equal 34', () => {
  expect(sum(31, 3)).toBe(34);
});
