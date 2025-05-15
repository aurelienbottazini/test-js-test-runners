
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 69 to equal 93', () => {
  expect(sum(24, 69)).toBe(93);
});
