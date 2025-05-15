
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 85 to equal 93', () => {
  expect(sum(8, 85)).toBe(93);
});
