
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 86 to equal 93', () => {
  expect(sum(7, 86)).toBe(93);
});
