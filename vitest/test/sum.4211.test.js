
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 24 + 37 to equal 61', () => {
  expect(sum(24, 37)).toBe(61);
});
