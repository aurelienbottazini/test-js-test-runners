
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 8 to equal 93', () => {
  expect(sum(85, 8)).toBe(93);
});
