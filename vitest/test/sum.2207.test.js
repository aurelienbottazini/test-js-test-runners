
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 37 to equal 136', () => {
  expect(sum(99, 37)).toBe(136);
});
