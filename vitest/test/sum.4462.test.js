
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 37 to equal 93', () => {
  expect(sum(56, 37)).toBe(93);
});
