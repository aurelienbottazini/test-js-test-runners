
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 74 to equal 93', () => {
  expect(sum(19, 74)).toBe(93);
});
