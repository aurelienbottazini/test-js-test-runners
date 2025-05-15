
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 2 to equal 101', () => {
  expect(sum(99, 2)).toBe(101);
});
