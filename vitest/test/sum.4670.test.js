
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 32 + 61 to equal 93', () => {
  expect(sum(32, 61)).toBe(93);
});
