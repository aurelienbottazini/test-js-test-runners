
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 58 to equal 93', () => {
  expect(sum(35, 58)).toBe(93);
});
