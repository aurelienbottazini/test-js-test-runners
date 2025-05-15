
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 37 to equal 51', () => {
  expect(sum(14, 37)).toBe(51);
});
