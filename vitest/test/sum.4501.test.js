
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 52 to equal 93', () => {
  expect(sum(41, 52)).toBe(93);
});
