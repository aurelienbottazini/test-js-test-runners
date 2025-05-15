
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 39 + 2 to equal 41', () => {
  expect(sum(39, 2)).toBe(41);
});
