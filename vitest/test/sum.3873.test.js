
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 19 to equal 93', () => {
  expect(sum(74, 19)).toBe(93);
});
