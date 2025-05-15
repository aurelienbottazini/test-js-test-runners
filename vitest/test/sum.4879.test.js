
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 41 to equal 41', () => {
  expect(sum(0, 41)).toBe(41);
});
