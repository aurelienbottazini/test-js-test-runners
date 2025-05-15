
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 99 to equal 124', () => {
  expect(sum(25, 99)).toBe(124);
});
