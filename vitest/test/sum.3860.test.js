
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 67 to equal 93', () => {
  expect(sum(26, 67)).toBe(93);
});
