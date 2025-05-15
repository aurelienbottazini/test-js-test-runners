
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 13 to equal 41', () => {
  expect(sum(28, 13)).toBe(41);
});
