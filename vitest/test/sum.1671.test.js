
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 41 to equal 93', () => {
  expect(sum(52, 41)).toBe(93);
});
