
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 58 to equal 58', () => {
  expect(sum(0, 58)).toBe(58);
});
