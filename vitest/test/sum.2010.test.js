
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 83 to equal 93', () => {
  expect(sum(10, 83)).toBe(93);
});
