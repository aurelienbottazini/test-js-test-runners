
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 0 to equal 41', () => {
  expect(sum(41, 0)).toBe(41);
});
