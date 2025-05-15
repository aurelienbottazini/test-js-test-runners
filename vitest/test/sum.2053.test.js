
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 99 to equal 101', () => {
  expect(sum(2, 99)).toBe(101);
});
