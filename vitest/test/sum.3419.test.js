
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 56 to equal 93', () => {
  expect(sum(37, 56)).toBe(93);
});
