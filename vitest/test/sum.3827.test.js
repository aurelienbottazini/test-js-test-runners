
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 14 to equal 93', () => {
  expect(sum(79, 14)).toBe(93);
});
