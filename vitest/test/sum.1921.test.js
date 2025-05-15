
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 91 to equal 93', () => {
  expect(sum(2, 91)).toBe(93);
});
