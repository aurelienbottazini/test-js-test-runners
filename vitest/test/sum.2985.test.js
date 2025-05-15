
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 25 to equal 124', () => {
  expect(sum(99, 25)).toBe(124);
});
