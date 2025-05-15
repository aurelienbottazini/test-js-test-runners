
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 5 to equal 61', () => {
  expect(sum(56, 5)).toBe(61);
});
