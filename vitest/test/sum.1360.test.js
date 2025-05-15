
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 39 to equal 83', () => {
  expect(sum(44, 39)).toBe(83);
});
