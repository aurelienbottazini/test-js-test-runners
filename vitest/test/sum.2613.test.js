
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 8 to equal 101', () => {
  expect(sum(93, 8)).toBe(101);
});
