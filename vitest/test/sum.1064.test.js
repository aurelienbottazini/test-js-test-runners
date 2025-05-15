
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 23 to equal 41', () => {
  expect(sum(18, 23)).toBe(41);
});
