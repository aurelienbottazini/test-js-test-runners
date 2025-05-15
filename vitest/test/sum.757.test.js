
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 99 to equal 105', () => {
  expect(sum(6, 99)).toBe(105);
});
