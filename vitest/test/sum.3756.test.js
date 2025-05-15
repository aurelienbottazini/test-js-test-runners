
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 77 to equal 93', () => {
  expect(sum(16, 77)).toBe(93);
});
