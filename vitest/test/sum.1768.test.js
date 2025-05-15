
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 8 to equal 41', () => {
  expect(sum(33, 8)).toBe(41);
});
