
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 62 to equal 93', () => {
  expect(sum(31, 62)).toBe(93);
});
