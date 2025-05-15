
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 10 to equal 41', () => {
  expect(sum(31, 10)).toBe(41);
});
