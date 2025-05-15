
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 99 to equal 102', () => {
  expect(sum(3, 99)).toBe(102);
});
