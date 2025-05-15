
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 10 to equal 93', () => {
  expect(sum(83, 10)).toBe(93);
});
