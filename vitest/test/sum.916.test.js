
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 39 to equal 41', () => {
  expect(sum(2, 39)).toBe(41);
});
