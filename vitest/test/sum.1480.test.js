
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 12 to equal 41', () => {
  expect(sum(29, 12)).toBe(41);
});
