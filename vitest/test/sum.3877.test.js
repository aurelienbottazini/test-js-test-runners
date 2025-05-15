
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 79 to equal 93', () => {
  expect(sum(14, 79)).toBe(93);
});
