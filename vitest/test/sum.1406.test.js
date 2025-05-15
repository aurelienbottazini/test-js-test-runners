
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 12 to equal 105', () => {
  expect(sum(93, 12)).toBe(105);
});
