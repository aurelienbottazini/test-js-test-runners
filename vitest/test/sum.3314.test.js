
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 3 + 90 to equal 93', () => {
  expect(sum(3, 90)).toBe(93);
});
